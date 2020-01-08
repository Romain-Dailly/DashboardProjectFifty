# FiftyTruckDashboard Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## About

Frontend application displaying orders seized on fiftyTruck website as data, in charts, with possibility to apply filters.
Lumen backend is required.

## Installation / Getting started

### Requirements

Angular 8, Node NPM, java(for swagger).

### Install

* [Download the installer](https://nodejs.org/) for Node.js.
* Install the angular CLI globally: `npm install -g @angular/cli`.
* Clone this repository: `git clone https://github.com/fiftytruck/angular-dashboard-proto.git`.
* Run `npm install` from the project root.
* Run `ng serve` or `npm run start` in a terminal from the project root.

### Development server

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* To generate fake data for charts from the front without fetching the API run `npm run sl` or `ng serve -c=localDev`. 
  (Call to Lumen Api for orders will still be made on user's click on chart and authentication will still be handled by a swagger call to api-inte-fiftytruck).

### Environment and constants
#### Authentication

* Call for authentication is made by swagger. Swagger needs java installed globally. Run script to install and update swagger with `npm run swagger:update` command.
The call to API-INTE-FIFTYTRUCK is made in `/src/app/components/login/login.component.ts`.

#### API

* Set the dashboard lumen api url in environments folder.

#### Language

* The language is set in environments folder. The file that handle all french text is `/src/assets/i18n/fr.json`.

### Charts

* Charts are handled by ng2charts with chart.js. The file to modify charts options is `/src/app/services/charts-options/charts-options.ts`.

### Possible upgrades

* Possibility for the user to create a filter without applying it on creation, in a modal maybe. Rename a filter too.

* Filter for distances could give the user the opportunity to set min and max distances, maybe with a double range slider.

* Filters for year and month could be upgraded, with maybe the possibility to chose a period in only one date picker.

* Design for resizable orders list could be upgraded and more user-friendly.

* The site is responsive but there is work to make it really user-friendly on small devices.
