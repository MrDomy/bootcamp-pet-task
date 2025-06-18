FROM node:22-alpine

RUN npm install -g corepack && corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
