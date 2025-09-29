## Aplicación de ejemplo de generación de reportes con nestjs

## Instrucciones para la configuración de prisma

1. Instalación de la configuración de prisma

```bash
  npx prisma init
```

2. Configuración de la base de datos en el archivo `.env`

3. Creación del esquema de mi base de datos

```bash
  npx prisma db pull
```

4. Generación del cliente de prisma

**Nota:** Si ya tienes un esquema de base de datos existente, puedes usar el comando `db pull` para generar el esquema de Prisma automáticamente.

```bash
  npx prisma generate
```

```bash
  npx prisma db pull
```

5. Generación del cliente de prisma

```bash
  npx prisma generate
```

6. Instalación de PDFMake para generación de reportes en PDF

```bash
  npm install pdfmake
```

7. Instalación de las tipificaciones de PDFMake

```bash
  npm i --save-dev @types/pdfmake
```

## Instrucciones para devs

1. Clonar el repositorio

```bash
  git clone <url-del-repositorio>
```

2. Instalar las dependencias

```bash
  npm install
```

3. Clonar `.env.template` y renombrarlo a `.env` y completar las variables de entorno.

4. Generar el prisma client

```bash
  npx prisma generate
```

5. Ejecutar el proyecto con el comando en desarrollo:

```bash
  npm run start:dev
```
