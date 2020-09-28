# Angular-Dashboard






In this project the following libraries are used:
* Angular Material
* HighCharts.

#### Angular Material

The majority of this project uses <a href="https://material.angular.io/">Angular Material</a>. From this library, I have used the following:

* Icons, cards, dividers, table, paginators
* Toolbar, sidenav, lists, buttons

#### Highcharts

The area graphs and pie chart are taken from the <a href="https://material.angular.io/">Highcharts</a> Library.

### Components

* **Default Component** is the parent component located in layouts folder and has its modules file.
* **Dashboard** and **Posts Components** in the modules folder are the children of default component and have their imports and services declared in default.modules.ts
* **Header, Footer** and **Sidebar components** are common throughout the application, that is why they are in shared folder and have their imports declared in shared.modules.ts
* The shared folder has another three components(**Area, Card** and **Pie**) which can be used anywhere in the application to dsplay charts and pie.
