import express = require('express');
import type { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('¡Mi primer servidor Express con TypeScript!');
});

app.get('/api/saludo', (req: Request, res: Response) => {
  res.json({
    mensaje: 'Hola desde la API',
    fecha: new Date().toISOString(),
  });
});

app.get('/api/saludo/:nombre', (req: Request, res: Response) => {
  const { nombre } = req.params;
  res.json({ mensaje: `Hola, ${nombre}!` });
});

export = app;
