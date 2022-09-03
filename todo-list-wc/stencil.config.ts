import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';

// props binding
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'todo-list-wc',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@todo-list-wc/dist/components', // let's comeback here later
      directivesProxyFile: './../stencil-angularapp-demo/src/libs/stencil-generated/proxies.ts', // let's comeback here later
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  plugins: [sass()],
};
