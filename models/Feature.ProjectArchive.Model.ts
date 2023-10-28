
/**
 * <auto-generated>
 *     This code was generated by a tool.
 *
 *     Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * </auto-generated>
 */ 

// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { Sitecore } from "./_.Sitecore.Override"
// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { ComponentRendering, RouteData, Field, ImageField, FileField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { DefaultComponentProps } from '@/lib/component-props';


export namespace ProjectArchive.DatasourceTemplates.Global.Accordian.Fields {
    export type Accordian = { 
        fields?: { 
            /**
            * Represents the Content field (f69a8fec-9fb4-4bec-96c8-009031bb5dce).
            */
            Content: Sitecore.Override.ItemEx[];

            /**
            * Represents the Description field (5e58f487-4cb2-4692-ab53-bc372a90dc03).
            */
            Description: Field<string>;

            /**
            * Represents the Title field (448bc5ab-3e1e-4fb4-9614-6205a4ad9813).
            */
            Title: Field<string>;
 
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Banner.Fields {
    export type BannerComponent = { 
        fields?: { 
            /**
            * Represents the BannerCTA field (33074cd7-cdb1-4932-9c65-5d7a422de44b).
            */
            BannerCTA: LinkField;

            /**
            * Represents the BannerDescription field (3723ffcf-dbfc-4732-8bf6-ec38424444bc).
            */
            BannerDescription: Field<string>;

            /**
            * Represents the BannerHeading field (504b6a24-30f7-4d75-96ac-7e4de2c29514).
            */
            BannerHeading: Field<string>;

            /**
            * Represents the BannerImage field (5449235e-28a1-44ed-a52c-e3731fe9b73c).
            */
            BannerImage: ImageField;
 
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Banner.Fields {
    export type BannerFolder = { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Card.Fields {
    export type CardComponent = { 
        fields?: { 
            /**
            * Represents the Cards field (4628f997-16ea-4ef9-96ed-cb4077a70c70).
            */
            Cards: Sitecore.Override.ItemEx[];

            /**
            * Represents the Description field (7d6c7332-e469-4f33-8795-5b7b9b75bf7f).
            */
            Description: Field<string>;

            /**
            * Represents the Heading field (94520ee7-4112-4a22-b0a9-c22d22deee4a).
            */
            Heading: Field<string>;
 
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Card.Fields {
    export type CardDetail = { 
        fields?: { 
            /**
            * Represents the CardCTA field (643998da-449a-441e-99bb-e9497f5dcdca).
            */
            CardCTA: LinkField;

            /**
            * Represents the CardDescription field (7f7d7605-b46f-40a9-9e0a-20722d00ac3b).
            */
            CardDescription: Field<string>;

            /**
            * Represents the CardImage field (10660a12-ee1e-4425-9a98-e066ade0aeba).
            */
            CardImage: ImageField;

            /**
            * Represents the CardTitle field (d56c5adf-6c31-4f2d-9444-20e5397f8486).
            */
            CardTitle: Field<string>;
 
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Client.Fields {
    export type ClientDetail = 
            ProjectArchive.DatasourceTemplates.Global.BaseTemplates.Fields.BaseInfo & { 
        fields?: { 
            /**
            * Represents the ClientLogo field (096430ce-8631-443e-92ce-844c9b5138fd).
            */
            ClientLogo: ImageField;

            /**
            * Represents the Email field (112eacee-157d-42c4-a084-1ecd8576dac5).
            */
            Email: Field<string>;

            /**
            * Represents the __Standard Values field (75a9e5db-3852-41eb-8fdc-31904248fb92).
            */
            IsClientActive: Field<boolean>;

            /**
            * Represents the PhoneNumber field (949eab63-b9eb-458f-9ccc-7885195e4b89).
            */
            PhoneNumber: Field<string>;

            /**
            * Represents the Projects field (9dbe56ab-d01d-4dcc-851a-9a758847490a).
            */
            Projects: Sitecore.Override.ItemEx[];

            /**
            * Represents the Region field (9f74b5e6-747a-43d2-aa2c-2ac88fb5a445).
            */
            Region?: Sitecore.Override.ItemEx;
 
        }
 }; 
}

export namespace ProjectArchive.PageTemplates.Client.Fields {
    export type ClientDetail = 
            ProjectArchive.PageTemplates.Fields.BasePage & { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Client.Fields {
    export type ClientFolder = { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.PageTemplates.Client.Fields {
    export type ClientListing = 
            ProjectArchive.PageTemplates.Fields.BasePage & { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Employee.Fields {
    export type EmployeeDetail = 
            ProjectArchive.DatasourceTemplates.Global.BaseTemplates.Fields.BaseInfo & { 
        fields?: { 
            /**
            * Represents the Clients field (07fb9bf2-8a66-433b-94ed-b70688d70f3c).
            */
            Clients: Sitecore.Override.ItemEx[];

            /**
            * Represents the Department field (a0590a2c-767c-4ec0-913c-00e6f50da436).
            */
            Department: Field<string>;

            /**
            * Represents the Email field (047f1529-99f3-46d2-95ad-63b66670cf7f).
            */
            Email: Field<string>;

            /**
            * Represents the Id field (796909ef-98c9-4093-8206-07b7c0fd25d5).
            */
            Id: Field<string>;

            /**
            * Represents the IsEmployeeWorking field (55d5f8d3-c85a-4c36-8868-92d6233a10a7).
            */
            IsEmployeeWorking: Field<boolean>;

            /**
            * Represents the JobTitle field (d2930811-f8de-409b-8c2b-e514f5e313fa).
            */
            JobTitle?: Sitecore.Override.ItemEx;

            /**
            * Represents the JoinningDate field (8f977454-858b-4e76-95e7-ec0691435b13).
            */
            JoinningDate: Field<string>;

            /**
            * Represents the Phone field (2bc218e9-9fbe-46f8-95ab-c631c470aa60).
            */
            Phone: Field<number>;

            /**
            * Represents the Projects field (d11ff85a-c2b8-4777-8ff7-9f5ea0e8b936).
            */
            Projects: Sitecore.Override.ItemEx[];

            /**
            * Represents the Skills field (f6a0d2b4-74f2-4cc0-947d-b31ce7e92df2).
            */
            Skills: Sitecore.Override.ItemEx[];

            /**
            * Represents the WorkLocation field (8f1675ff-8286-4930-bd3d-60dd62dbba21).
            */
            WorkLocation?: Sitecore.Override.ItemEx;
 
        }
 }; 
}

export namespace ProjectArchive.PageTemplates.Employee.Fields {
    export type EmployeeDetail = 
            ProjectArchive.PageTemplates.Fields.BasePage & { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Employee.Fields {
    export type EmployeeFolder = { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.PageTemplates.Employee.Fields {
    export type EmployeeListing = 
            ProjectArchive.PageTemplates.Fields.BasePage & { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Fields {
    export type EnumFolder = { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Fields {
    export type EnumItem = { 
        fields?: { 
            /**
            * Represents the Title field (581d38a5-c505-4c2c-8315-2c171b20b0bc).
            */
            Title: Field<string>;
 
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Footer.Fields {
    export type FooterTemplate = { 
        fields?: { 
            /**
            * Represents the CopyrightText field (d14c8807-e107-4a53-bced-9aee8f922648).
            */
            CopyrightText: Field<string>;

            /**
            * Represents the Description field (e69bbae6-c1ed-46d8-9723-a75c06cf3e77).
            */
            Description: Field<string>;

            /**
            * Represents the LinksTitle field (1f9c3e43-1683-42f8-b00a-0733d561fff8).
            */
            LinksTitle: Field<string>;

            /**
            * Represents the Logo field (3becd0bf-c303-42f8-9d81-f3af89aef98b).
            */
            Logo: ImageField;

            /**
            * Represents the SocialLinks field (44f22654-0230-4347-8f2f-ac1781322793).
            */
            SocialLinks: Sitecore.Override.ItemEx[];

            /**
            * Represents the Title field (4c417e75-4e03-447a-8cfa-1db703264b24).
            */
            Title: Field<string>;
 
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Fields {
    export type GlobalFolder = { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Header.Fields {
    export type HeaderTemplate = { 
        fields?: { 
            /**
            * Represents the HeaderLinks field (4194cd85-9e78-44cf-9bf5-e7bad53fca23).
            */
            HeaderLinks: Sitecore.Override.ItemEx[];

            /**
            * Represents the Logo field (d4e2c394-91ee-4263-8c28-fbe0bf2ed953).
            */
            Logo: ImageField;

            /**
            * Represents the TagLine field (6b656eb6-43e5-46e1-882d-bbe8834b14f7).
            */
            TagLine: Field<string>;
 
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Fields {
    export type MainSectionTemplateFolder = { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Project.Fields {
    export type ProjectDetail = 
            ProjectArchive.DatasourceTemplates.Global.BaseTemplates.Fields.BaseInfo & { 
        fields?: { 
            /**
            * Represents the ProjectEndDate field (791cf1ca-5984-4779-8583-bb0110f82bf5).
            */
            ProjectEndDate: Field<string>;

            /**
            * Represents the ProjectHighlight field (be828d4c-e0bd-4100-a2a0-6358dfb1f0a5).
            */
            ProjectHighlight: Field<string>;

            /**
            * Represents the ProjectImage field (41632692-d262-4e9d-9146-6d82997378e0).
            */
            ProjectImage: ImageField;

            /**
            * Represents the ProjectStartDate field (8cd811a6-06f4-421f-b1b2-28279c6bd429).
            */
            ProjectStartDate: Field<string>;

            /**
            * Represents the ProjectStatus field (7a3582f5-4ecc-45cf-9c1d-904a71f384ab).
            */
            ProjectStatus: Field<string>;

            /**
            * Represents the ProjectTeamMembers field (530ba405-9e8f-439c-a225-59b27d11b53a).
            */
            ProjectTeamMembers: Sitecore.Override.ItemEx[];

            /**
            * Represents the ProjectVideo field (4732a2b8-b4b2-46b2-8071-812855eaa9d4).
            */
            ProjectVideo: LinkField;
 
        }
 }; 
}

export namespace ProjectArchive.PageTemplates.Project.Fields {
    export type ProjectDetail = 
            ProjectArchive.PageTemplates.Fields.BasePage & { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.PageTemplates.Project.Fields {
    export type ProjectListing = 
            ProjectArchive.PageTemplates.Fields.BasePage & { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Project.Fields {
    export type ProjectsFolder = { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Fields {
    export type SocialLinkItems = { 
        fields?: { 
            /**
            * Represents the Icon field (25521119-4bf6-46d2-b50d-e8e35b57496d).
            */
            Icon: ImageField;

            /**
            * Represents the Link field (90247700-30cf-4e83-8cca-89d92eaf4283).
            */
            Link: LinkField;
 
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.Fields {
    export type SocialLinksFolder = { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.PageTemplates.Fields {
    export type BasePage = { 
        fields?: {  
        }
 }; 
}

export namespace ProjectArchive.DatasourceTemplates.Global.BaseTemplates.Fields {
    export type BaseInfo = { 
        fields?: { 
            /**
            * Represents the Description field (5521ea20-6c42-4aec-ba0b-cea23cee8667).
            */
            Description: Field<string>;

            /**
            * Represents the Name field (7d4127df-963c-4806-93ef-197dd902c8c1).
            */
            Name: Field<string>;

            /**
            * Represents the Thumbnail field (65d584b1-9710-4582-a55c-0a89bcecefbb).
            */
            Thumbnail: ImageField;
 
        }
 }; 
}


