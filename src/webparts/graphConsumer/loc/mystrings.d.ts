declare interface IGraphConsumerWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  //DescriptionFieldLabel: string;
  ClientModeLabel: string;
  SearchFor: string;
  SearchForValidationErrorMessage: string;  
}

declare module 'GraphConsumerWebPartStrings' {
  const strings: IGraphConsumerWebPartStrings;
  export = strings;
}
