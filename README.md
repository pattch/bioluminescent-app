# Bioluminescent (Landing Page)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deployment on GCP

This app can be deployed to GCP by following some modified instructions from [this medium article](https://medium.com/@karthiksagar/how-to-deploy-angular-8-app-on-google-cloud-platform-gcp-cdd79e5cc5cf).

- In place of the provided `app.yaml` file in the article, the following can be used:

```yaml
runtime: python39
handlers:
- url: /
  static_files: bioluminescent-app/index.html
  upload: bioluminescent-app/index.html
- url: /
  static_dir: bioluminescent-app
```

- This modified `app.yaml` file is also included in this repository for posterity
- Follow the other instructions as indicated to build, configure, and ultimately deploy this site to GCP
