# PreEntrega Node.js - FakeStore API

Proyecto realizado en Node.js utilizando la API pública de FakeStore para gestionar productos mediante comandos desde la terminal.

## Funcionalidades

- Consultar todos los productos.
- Consultar un producto específico.
- Crear un nuevo producto.
- Eliminar un producto.

---

## Configuración Inicial

Inicializar el proyecto:

```bash
npm init -y
```

Agregar en el `package.json`:

```json
"type": "module"
```

Agregar el script start:

```json
"scripts": {
  "start": "node index.js"
}
```

---

## API utilizada

https://fakestoreapi.com/

---

## Comandos

### Obtener todos los productos

```bash
npm run start GET products
```

### Obtener un producto específico

```bash
npm run start GET products/15
```

### Crear un producto

```bash
npm run start POST products "Remera" 300 ropa
```

### Eliminar un producto

```bash
npm run start DELETE products/7
```

---

## Conceptos aplicados

- process.argv
- Fetch API
- Promesas
- Métodos HTTP (GET, POST y DELETE)
- JSON
- Destructuring
