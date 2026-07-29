import React, { useEffect } from "react";

const SettingsPanel: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      "shader-canvas-ANIMATION_124",
    ) as HTMLCanvasElement;

    function syncSize() {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(syncSize).observe(canvas);
    }
    syncSize();

    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    const vs = `attribute vec2 a_position;\nvarying vec2 v_texCoord;\nvoid main() {\n  v_texCoord = a_position * 0.5 + 0.5;\n  gl_Position = vec4(a_position, 0.0, 1.0);\n}`;
    const fs = `precision highp float;\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nvarying vec2 v_texCoord;\n\nfloat noise(vec2 p) {\n    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main() {\n    vec2 uv = v_texCoord;\n    vec2 mouse = u_mouse / u_resolution;\n    \n    // PRPilot Immersive Palette\n    vec3 bg = vec3(0.012, 0.027, 0.071); // #030712\n    vec3 accent1 = vec3(0.388, 0.4, 0.945); // #6366f1\n    vec3 accent2 = vec3(0.133, 0.827, 0.933); // #22d3ee\n    \n    // Slow cinematic nebula flow\n    float t = u_time * 0.05;\n    float n1 = sin(uv.x * 1.5 + t) * cos(uv.y * 1.2 - t);\n    float n2 = sin(uv.y * 2.0 - t * 0.4) * cos(uv.x * 1.8 + t * 0.6);\n    \n    float nebula = pow(abs(n1 * n2), 2.5);\n    \n    // Interactive mouse gravity well\n    float dist = distance(uv, mouse);\n    float glow = smoothstep(0.6, 0.0, dist) * 0.12;\n    \n    vec3 color = mix(bg, bg * 1.3, uv.y + n1 * 0.05);\n    color += accent1 * nebula * 0.08;\n    color += accent2 * n2 * 0.03;\n    color += accent1 * glow;\n    \n    // Subtle film grain\n    color += (noise(uv + u_time) - 0.5) * 0.01;\n    \n    // Deep vignette\n    color *= 1.0 - distance(uv, vec2(0.5)) * 0.8;\n    \n    gl_FragColor = vec4(color, 1.0);\n}`;

    function cs(type: number, src: string) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    window.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    });

    function render(t: number) {
      if (typeof ResizeObserver === "undefined") syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }
    render(0);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full">
      <canvas id="shader-canvas-ANIMATION_124"></canvas>
    </div>
  );
};

export default SettingsPanel;
