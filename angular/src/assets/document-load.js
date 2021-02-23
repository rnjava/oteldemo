import { LogLevel } from "@opentelemetry/core";
import { WebTracerProvider } from "@opentelemetry/web";
import { DocumentLoad } from "@opentelemetry/plugin-document-load";
import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from "@opentelemetry/tracing";

// Minimum required setup - supports only synchronous operations
const provider = new WebTracerProvider({
  plugins: [new DocumentLoad()],
});
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();
