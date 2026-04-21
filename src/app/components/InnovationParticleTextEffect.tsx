import * as React from "react";
import { cn } from "./ui/utils";

interface Vector2D {
  x: number;
  y: number;
}

interface ParticleColor {
  r: number;
  g: number;
  b: number;
}

interface InnovationParticleTextEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  words?: string[];
}

function generateRandomPos(originX: number, originY: number, magnitude: number, width: number, height: number): Vector2D {
  const randomX = Math.random() * width;
  const randomY = Math.random() * height;
  const directionX = randomX - originX;
  const directionY = randomY - originY;
  const directionMagnitude = Math.hypot(directionX, directionY) || 1;

  return {
    x: originX + (directionX / directionMagnitude) * magnitude,
    y: originY + (directionY / directionMagnitude) * magnitude,
  };
}

function createWordColor(): ParticleColor {
  const palette = [
    { r: 255, g: 255, b: 255 },
    { r: 173, g: 228, b: 255 },
    { r: 113, g: 177, b: 255 },
    { r: 164, g: 245, b: 255 },
    { r: 198, g: 208, b: 255 },
  ];

  return palette[Math.floor(Math.random() * palette.length)];
}

class Particle {
  pos: Vector2D = { x: 0, y: 0 };
  vel: Vector2D = { x: 0, y: 0 };
  acc: Vector2D = { x: 0, y: 0 };
  target: Vector2D = { x: 0, y: 0 };
  closeEnoughTarget = 96;
  maxSpeed = 1;
  maxForce = 0.1;
  isKilled = false;
  startColor: ParticleColor = { r: 255, g: 255, b: 255 };
  targetColor: ParticleColor = { r: 255, g: 255, b: 255 };
  colorWeight = 0;
  colorBlendRate = 0.01;

  move() {
    const distance = Math.hypot(this.target.x - this.pos.x, this.target.y - this.pos.y);
    const proximityMult = distance < this.closeEnoughTarget ? Math.max(distance / this.closeEnoughTarget, 0.08) : 1;
    const desiredX = this.target.x - this.pos.x;
    const desiredY = this.target.y - this.pos.y;
    const desiredMagnitude = Math.hypot(desiredX, desiredY) || 1;

    const steerX = (desiredX / desiredMagnitude) * this.maxSpeed * proximityMult - this.vel.x;
    const steerY = (desiredY / desiredMagnitude) * this.maxSpeed * proximityMult - this.vel.y;
    const steerMagnitude = Math.hypot(steerX, steerY) || 1;
    const clampedSteer =
      steerMagnitude > this.maxForce
        ? {
            x: (steerX / steerMagnitude) * this.maxForce,
            y: (steerY / steerMagnitude) * this.maxForce,
          }
        : { x: steerX, y: steerY };

    this.acc.x += clampedSteer.x;
    this.acc.y += clampedSteer.y;
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(context: CanvasRenderingContext2D) {
    if (this.colorWeight < 1) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1);
    }

    const currentColor = {
      r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
      g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
      b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
    };

    context.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
    context.fillRect(this.pos.x, this.pos.y, 2, 2);
  }

  kill(width: number, height: number) {
    if (this.isKilled) return;

    const randomPos = generateRandomPos(width / 2, height / 2, (width + height) / 2, width, height);
    this.target.x = randomPos.x;
    this.target.y = randomPos.y;
    this.startColor = {
      r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
      g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
      b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
    };
    this.targetColor = { r: 0, g: 0, b: 0 };
    this.colorWeight = 0;
    this.isKilled = true;
  }
}

const DEFAULT_WORDS = ["INNOVATION", "IA", "AUTOMATISATION", "BLOCKCHAIN", "INFRASTRUCTURE"];

export function InnovationParticleTextEffect({
  words = DEFAULT_WORDS,
  className,
  ...props
}: InnovationParticleTextEffectProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const animationRef = React.useRef<number>(0);
  const particlesRef = React.useRef<Particle[]>([]);
  const mouseRef = React.useRef({ isPressed: false, isRightClick: false, x: 0, y: 0 });
  const sizeRef = React.useRef({ height: 1, width: 1 });
  const wordIndexRef = React.useRef(0);
  const lastWordChangeRef = React.useRef(0);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !container || !context) return undefined;

    const nextWord = (word: string) => {
      const { width, height } = sizeRef.current;
      const offscreenCanvas = document.createElement("canvas");
      const offscreenContext = offscreenCanvas.getContext("2d");

      if (!offscreenContext) return;

      offscreenCanvas.width = width;
      offscreenCanvas.height = height;

      let fontSize = Math.min(width * 0.17, height * 0.36, 156);
      offscreenContext.font = `700 ${fontSize}px Inter, Arial, sans-serif`;

      while (offscreenContext.measureText(word).width > width * 0.78 && fontSize > 48) {
        fontSize *= 0.92;
        offscreenContext.font = `700 ${fontSize}px Inter, Arial, sans-serif`;
      }

      offscreenContext.clearRect(0, 0, width, height);
      offscreenContext.fillStyle = "#ffffff";
      offscreenContext.textAlign = "center";
      offscreenContext.textBaseline = "middle";
      offscreenContext.fillText(word, width / 2, height / 2);

      const pixels = offscreenContext.getImageData(0, 0, width, height).data;
      const sampleStep = width < 640 ? 7 : 6;
      const coordinates: Array<{ x: number; y: number }> = [];

      for (let y = 0; y < height; y += sampleStep) {
        for (let x = 0; x < width; x += sampleStep) {
          const alpha = pixels[(y * width + x) * 4 + 3];
          if (alpha > 0) {
            coordinates.push({ x, y });
          }
        }
      }

      for (let index = coordinates.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [coordinates[index], coordinates[swapIndex]] = [coordinates[swapIndex], coordinates[index]];
      }

      const nextColor = createWordColor();
      const particles = particlesRef.current;
      let particleIndex = 0;

      for (const coordinate of coordinates) {
        let particle: Particle;

        if (particleIndex < particles.length) {
          particle = particles[particleIndex];
          particle.isKilled = false;
          particleIndex += 1;
        } else {
          particle = new Particle();
          const randomPos = generateRandomPos(width / 2, height / 2, (width + height) * 0.5, width, height);

          particle.pos.x = randomPos.x;
          particle.pos.y = randomPos.y;
          particle.maxSpeed = Math.random() * 3 + 2.8;
          particle.maxForce = particle.maxSpeed * 0.035;
          particle.colorBlendRate = Math.random() * 0.018 + 0.002;

          particles.push(particle);
          particleIndex += 1;
        }

        particle.startColor = {
          r: particle.startColor.r + (particle.targetColor.r - particle.startColor.r) * particle.colorWeight,
          g: particle.startColor.g + (particle.targetColor.g - particle.startColor.g) * particle.colorWeight,
          b: particle.startColor.b + (particle.targetColor.b - particle.startColor.b) * particle.colorWeight,
        };
        particle.targetColor = nextColor;
        particle.colorWeight = 0;
        particle.target.x = coordinate.x;
        particle.target.y = coordinate.y;
      }

      for (let index = particleIndex; index < particles.length; index += 1) {
        particles[index].kill(width, height);
      }

      lastWordChangeRef.current = performance.now();
    };

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      sizeRef.current = { height, width };
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);
      particlesRef.current = [];
      wordIndexRef.current = 0;
      nextWord(words[0] ?? DEFAULT_WORDS[0]);
    };

    const animate = () => {
      const { width, height } = sizeRef.current;
      const now = performance.now();

      context.fillStyle = "rgba(0, 0, 0, 0.08)";
      context.fillRect(0, 0, width, height);

      for (let index = particlesRef.current.length - 1; index >= 0; index -= 1) {
        const particle = particlesRef.current[index];
        particle.move();
        particle.draw(context);

        if (
          particle.isKilled &&
          (particle.pos.x < -12 || particle.pos.x > width + 12 || particle.pos.y < -12 || particle.pos.y > height + 12)
        ) {
          particlesRef.current.splice(index, 1);
        }
      }

      if (mouseRef.current.isPressed && mouseRef.current.isRightClick) {
        particlesRef.current.forEach((particle) => {
          if (Math.hypot(particle.pos.x - mouseRef.current.x, particle.pos.y - mouseRef.current.y) < 52) {
            particle.kill(width, height);
          }
        });
      }

      if (words.length > 1 && now - lastWordChangeRef.current >= 5200) {
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        nextWord(words[wordIndexRef.current]);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const updateMousePosition = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
    };

    const handleMouseDown = (event: MouseEvent) => {
      updateMousePosition(event);
      mouseRef.current.isPressed = true;
      mouseRef.current.isRightClick = event.button === 2;
    };

    const handleMouseMove = (event: MouseEvent) => {
      updateMousePosition(event);
    };

    const handleMouseUp = () => {
      mouseRef.current.isPressed = false;
      mouseRef.current.isRightClick = false;
    };

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(container);
    resizeCanvas();
    animate();

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [words]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[320px] w-full overflow-hidden bg-[#03050a] sm:h-[400px] md:h-[470px] lg:h-[520px]",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,126,255,0.16),transparent_26%),linear-gradient(180deg,rgba(5,9,18,0.72),rgba(1,2,6,1))]" />
      <canvas
        ref={canvasRef}
        aria-label="Effet de texte en particules pour la section innovation"
        className="relative z-10 h-full w-full"
      />
    </div>
  );
}
