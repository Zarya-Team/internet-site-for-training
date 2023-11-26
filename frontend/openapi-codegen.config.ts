import type { SchemaObject } from 'openapi3-ts/oas31';
import { defineConfig } from '@openapi-codegen/cli';
import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from '@openapi-codegen/typescript';
import dotenv from 'dotenv';
import { camel } from 'radash';

dotenv.config();

export default defineConfig({
  queries: {
    from: {
      source: 'url',
      url: process.env.BACKEND_OPENAPI_SCHEMA as string,
    },
    outputDir: 'src/queries',
    to: async (context) => {
      const {
        openAPIDocument: { components },
      } = context;
      for (const schema of Object.values(components?.schemas || {})) {
        if (Object.prototype.hasOwnProperty.call(schema, '$ref')) {
          continue;
        }
        const { properties, required } = schema as SchemaObject;
        if (properties == null) {
          continue;
        }
        for (const propertyName of Object.keys(properties)) {
          const stored = properties[propertyName];
          delete properties[propertyName];
          properties[camel(propertyName)] = stored;
        }

        if (required != null) {
          for (let i = 0; i < required.length; i++) {
            const propertyName = required[i];
            required[i] = camel(propertyName);
          }
        }
      }
      const { schemasFiles } = await generateSchemaTypes(context);
      await generateReactQueryComponents(context, {
        schemasFiles,
      });
    },
  },
});
