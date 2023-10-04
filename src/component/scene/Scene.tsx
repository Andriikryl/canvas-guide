"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { Container } from "../container/Container";

let plotData = [];
let N = 0;
let f;

export default function Scene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx?.strokeRect(200, 200, 40, 50);
    }
  }, []);

  return (
    <section>
      <Container>
        <canvas
          ref={canvasRef}
          width="400"
          height="350"
          style={{ border: "2px solid black" }}
        />
      </Container>
    </section>
  );
}
