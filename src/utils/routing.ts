export enum Route {
    Index = "Index",
    Terms = "Terms",
    Privacy = "Privacy",
  }
  
  
  
  export const RoutePath = {
    [Route.Index]: () => "/",
    [Route.Terms]: () => "/terms",
    [Route.Privacy]: () => "/privacy",
  };
  
  export function routeTitleTemplate(title: string) {
    return `${title} | Coffee`;
  }
  