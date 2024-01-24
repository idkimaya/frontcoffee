export enum Route {
    Index = "Index",
    Terms = "Terms",
    Privacy = "Privacy",
    Signup = "Signup",
  }
  
  
  
  export const RoutePath = {
    [Route.Index]: () => "/",
    [Route.Terms]: () => "/terms",
    [Route.Privacy]: () => "/privacy",
    [Route.Signup]: () => "/signup",
  };
  
  export function routeTitleTemplate(title: string) {
    return `${title} | Coffee`;
  }
  