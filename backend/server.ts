import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getAllStories } from "./controllers/storyController.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const router = new Router();

router
    .get('/', getAllStories);

const app = new Application();
app.use(
    oakCors({
      origin: "http://localhost:3000"
    }),
);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
console.log('Running on port 8080');