export enum Route {
    Index = "Index",
    
  }
  
  
  
  export const RoutePath = {
    [Route.Index]: () => "/",
   
  };
  
  export function routeTitleTemplate(title: string) {
    return `${title} | Coffee`;
  }
  