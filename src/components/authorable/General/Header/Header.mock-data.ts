//import { HeaderType } from './Header';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: any = {
  rendering: { componentName: 'Header' },
  params: {},
  fields: {
    HeaderLinks: [
      {
        id: '15cc85f3-ad65-4568-a0aa-5eab1afe3d09',
        url: '/test?sc_site=projectarchive',
        name: 'test',
        displayName: 'test',
        fields: {
          Title: {
            value: 'test',
            editable:
              '<input id=\'fld_15CC85F3AD654568A0AA5EAB1AFE3D09_6377A3EFA32F4A7EBBE4C714226B8657_en_1_79ecb9eff3894c628fd28bc0d91dca61_89\' class=\'scFieldValue\' name=\'fld_15CC85F3AD654568A0AA5EAB1AFE3D09_6377A3EFA32F4A7EBBE4C714226B8657_en_1_79ecb9eff3894c628fd28bc0d91dca61_89\' type=\'hidden\' value="test" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{15CC85F3-AD65-4568-A0AA-5EAB1AFE3D09}?lang=en&ver=1","custom":{},"displayName":"Title","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_15CC85F3AD654568A0AA5EAB1AFE3D09_6377A3EFA32F4A7EBBE4C714226B8657_en_1_79ecb9eff3894c628fd28bc0d91dca61_89_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">test</span>',
          },
          Content: {
            value: '',
            editable:
              '<input id=\'fld_15CC85F3AD654568A0AA5EAB1AFE3D09_7B3E1EF176394FA58EBDFD5B9E66C0C8_en_1_79ecb9eff3894c628fd28bc0d91dca61_90\' class=\'scFieldValue\' name=\'fld_15CC85F3AD654568A0AA5EAB1AFE3D09_7B3E1EF176394FA58EBDFD5B9E66C0C8_en_1_79ecb9eff3894c628fd28bc0d91dca61_90\' type=\'hidden\' value="" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"},{"click":"chrome:field:editcontrol({command:\\"webedit: edithtml\\"})","header":"Edit Text","icon":"/temp/iconcache/office/16x16/pencil.png","disabledIcon":"/temp/pencil_disabled16x16.png","isDivider":false,"tooltip":"Edit the text","type":""},{"click":"chrome:field:execute({command:\\"bold\\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_bold.png","disabledIcon":"/temp/font_style_bold_disabled16x16.png","isDivider":false,"tooltip":"Bold","type":""},{"click":"chrome:field:execute({command:\\"Italic\\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_italics.png","disabledIcon":"/temp/font_style_italics_disabled16x16.png","isDivider":false,"tooltip":"Italic","type":""},{"click":"chrome:field:execute({command:\\"Underline\\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_underline.png","disabledIcon":"/temp/font_style_underline_disabled16x16.png","isDivider":false,"tooltip":"Underline","type":""},{"click":"chrome:field:insertlink","header":"","icon":"/temp/iconcache/office/16x16/link.png","disabledIcon":"/temp/link_disabled16x16.png","isDivider":false,"tooltip":"Insert a link into the text field.","type":""},{"click":"chrome:field:insertimage","header":"Insert image","icon":"/temp/iconcache/office/16x16/photo_landscape.png","disabledIcon":"/temp/photo_landscape_disabled16x16.png","isDivider":false,"tooltip":"Insert an image into the text field.","type":""}],"contextItemUri":"sitecore://master/{15CC85F3-AD65-4568-A0AA-5EAB1AFE3D09}?lang=en&ver=1","custom":{},"displayName":"Content","expandedDisplayName":null}</span><span class="scWebEditInput" id="fld_15CC85F3AD654568A0AA5EAB1AFE3D09_7B3E1EF176394FA58EBDFD5B9E66C0C8_en_1_79ecb9eff3894c628fd28bc0d91dca61_90_edit" contenteditable="true" scWatermark="true" scDefaultText="[No text in field]" scFieldType="rich text">[No text in field]</span>',
          },
          NavigationTitle: {
            value: 'test',
            editable:
              '<input id=\'fld_15CC85F3AD654568A0AA5EAB1AFE3D09_4E0720E99D504DDC87CFECD65E8E94C8_en_1_79ecb9eff3894c628fd28bc0d91dca61_91\' class=\'scFieldValue\' name=\'fld_15CC85F3AD654568A0AA5EAB1AFE3D09_4E0720E99D504DDC87CFECD65E8E94C8_en_1_79ecb9eff3894c628fd28bc0d91dca61_91\' type=\'hidden\' value="test" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{15CC85F3-AD65-4568-A0AA-5EAB1AFE3D09}?lang=en&ver=1","custom":{},"displayName":"Link caption in navigation","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_15CC85F3AD654568A0AA5EAB1AFE3D09_4E0720E99D504DDC87CFECD65E8E94C8_en_1_79ecb9eff3894c628fd28bc0d91dca61_91_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">test</span>',
          },
          NavigationClass: null,
          NavigationFilter: [],
          Priority: {
            id: '19f3e919-4991-495f-9207-e1dadfd06f54',
            url: 'https://projarchivesc.dev.local/sitecore/login/sitecore/system/Settings/Foundation/Experience-Accelerator/SiteMetadata/Enums/SitemapPriority/05?sc_mode=edit',
            name: '05',
            displayName: '0.5',
            fields: {
              Value: {
                value: '0.5',
                editable:
                  '<input id=\'fld_19F3E9194991495F9207E1DADFD06F54_F917C9511F754D62B14ABC6888D7EECA_en_1_a47c3b55a5864baf9b9f464568e75bd5_92\' class=\'scFieldValue\' name=\'fld_19F3E9194991495F9207E1DADFD06F54_F917C9511F754D62B14ABC6888D7EECA_en_1_a47c3b55a5864baf9b9f464568e75bd5_92\' type=\'hidden\' value="0.5" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{19F3E919-4991-495F-9207-E1DADFD06F54}?lang=en&ver=1","custom":{},"displayName":"Value","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_19F3E9194991495F9207E1DADFD06F54_F917C9511F754D62B14ABC6888D7EECA_en_1_a47c3b55a5864baf9b9f464568e75bd5_92_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">0.5</span>',
              },
            },
          },
          ChangeFrequency: {
            id: 'd23b4654-53a5-4589-8b1b-5665a763d144',
            url: 'https://projarchivesc.dev.local/sitecore/login/sitecore/system/Settings/Foundation/Experience-Accelerator/SiteMetadata/Enums/SitemapChangeFrequency/daily?sc_mode=edit',
            name: 'daily',
            displayName: 'daily',
            fields: {
              Value: {
                value: 'Daily',
                editable:
                  '<input id=\'fld_D23B465453A545898B1B5665A763D144_F917C9511F754D62B14ABC6888D7EECA_en_1_68f0d54271e34d57b9dc9ebdecbde310_93\' class=\'scFieldValue\' name=\'fld_D23B465453A545898B1B5665A763D144_F917C9511F754D62B14ABC6888D7EECA_en_1_68f0d54271e34d57b9dc9ebdecbde310_93\' type=\'hidden\' value="Daily" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{D23B4654-53A5-4589-8B1B-5665A763D144}?lang=en&ver=1","custom":{},"displayName":"Value","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_D23B465453A545898B1B5665A763D144_F917C9511F754D62B14ABC6888D7EECA_en_1_68f0d54271e34d57b9dc9ebdecbde310_93_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">Daily</span>',
              },
            },
          },
          'Page Design': null,
        },
      },
      {
        id: '9fb23bc1-a14a-4f9e-a578-ebec94138cc3',
        url: '/banner-test?sc_site=projectarchive',
        name: 'banner-test',
        displayName: 'banner-test',
        fields: {
          Title: {
            value: 'banner-test',
            editable:
              '<input id=\'fld_9FB23BC1A14A4F9EA578EBEC94138CC3_6377A3EFA32F4A7EBBE4C714226B8657_en_1_844b60911df24d63a75edcc2be457b0e_94\' class=\'scFieldValue\' name=\'fld_9FB23BC1A14A4F9EA578EBEC94138CC3_6377A3EFA32F4A7EBBE4C714226B8657_en_1_844b60911df24d63a75edcc2be457b0e_94\' type=\'hidden\' value="banner-test" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{9FB23BC1-A14A-4F9E-A578-EBEC94138CC3}?lang=en&ver=1","custom":{},"displayName":"Title","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_9FB23BC1A14A4F9EA578EBEC94138CC3_6377A3EFA32F4A7EBBE4C714226B8657_en_1_844b60911df24d63a75edcc2be457b0e_94_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">banner-test</span>',
          },
          Content: {
            value: '',
            editable:
              '<input id=\'fld_9FB23BC1A14A4F9EA578EBEC94138CC3_7B3E1EF176394FA58EBDFD5B9E66C0C8_en_1_844b60911df24d63a75edcc2be457b0e_95\' class=\'scFieldValue\' name=\'fld_9FB23BC1A14A4F9EA578EBEC94138CC3_7B3E1EF176394FA58EBDFD5B9E66C0C8_en_1_844b60911df24d63a75edcc2be457b0e_95\' type=\'hidden\' value="" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"},{"click":"chrome:field:editcontrol({command:\\"webedit: edithtml\\"})","header":"Edit Text","icon":"/temp/iconcache/office/16x16/pencil.png","disabledIcon":"/temp/pencil_disabled16x16.png","isDivider":false,"tooltip":"Edit the text","type":""},{"click":"chrome:field:execute({command:\\"bold\\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_bold.png","disabledIcon":"/temp/font_style_bold_disabled16x16.png","isDivider":false,"tooltip":"Bold","type":""},{"click":"chrome:field:execute({command:\\"Italic\\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_italics.png","disabledIcon":"/temp/font_style_italics_disabled16x16.png","isDivider":false,"tooltip":"Italic","type":""},{"click":"chrome:field:execute({command:\\"Underline\\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_underline.png","disabledIcon":"/temp/font_style_underline_disabled16x16.png","isDivider":false,"tooltip":"Underline","type":""},{"click":"chrome:field:insertlink","header":"","icon":"/temp/iconcache/office/16x16/link.png","disabledIcon":"/temp/link_disabled16x16.png","isDivider":false,"tooltip":"Insert a link into the text field.","type":""},{"click":"chrome:field:insertimage","header":"Insert image","icon":"/temp/iconcache/office/16x16/photo_landscape.png","disabledIcon":"/temp/photo_landscape_disabled16x16.png","isDivider":false,"tooltip":"Insert an image into the text field.","type":""}],"contextItemUri":"sitecore://master/{9FB23BC1-A14A-4F9E-A578-EBEC94138CC3}?lang=en&ver=1","custom":{},"displayName":"Content","expandedDisplayName":null}</span><span class="scWebEditInput" id="fld_9FB23BC1A14A4F9EA578EBEC94138CC3_7B3E1EF176394FA58EBDFD5B9E66C0C8_en_1_844b60911df24d63a75edcc2be457b0e_95_edit" contenteditable="true" scWatermark="true" scDefaultText="[No text in field]" scFieldType="rich text">[No text in field]</span>',
          },
          NavigationTitle: {
            value: 'banner-test',
            editable:
              '<input id=\'fld_9FB23BC1A14A4F9EA578EBEC94138CC3_4E0720E99D504DDC87CFECD65E8E94C8_en_1_844b60911df24d63a75edcc2be457b0e_96\' class=\'scFieldValue\' name=\'fld_9FB23BC1A14A4F9EA578EBEC94138CC3_4E0720E99D504DDC87CFECD65E8E94C8_en_1_844b60911df24d63a75edcc2be457b0e_96\' type=\'hidden\' value="banner-test" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{9FB23BC1-A14A-4F9E-A578-EBEC94138CC3}?lang=en&ver=1","custom":{},"displayName":"Link caption in navigation","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_9FB23BC1A14A4F9EA578EBEC94138CC3_4E0720E99D504DDC87CFECD65E8E94C8_en_1_844b60911df24d63a75edcc2be457b0e_96_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">banner-test</span>',
          },
          NavigationClass: null,
          NavigationFilter: [],
          Priority: {
            id: '19f3e919-4991-495f-9207-e1dadfd06f54',
            url: 'https://projarchivesc.dev.local/sitecore/login/sitecore/system/Settings/Foundation/Experience-Accelerator/SiteMetadata/Enums/SitemapPriority/05?sc_mode=edit',
            name: '05',
            displayName: '0.5',
            fields: {
              Value: {
                value: '0.5',
                editable:
                  '<input id=\'fld_19F3E9194991495F9207E1DADFD06F54_F917C9511F754D62B14ABC6888D7EECA_en_1_a47c3b55a5864baf9b9f464568e75bd5_97\' class=\'scFieldValue\' name=\'fld_19F3E9194991495F9207E1DADFD06F54_F917C9511F754D62B14ABC6888D7EECA_en_1_a47c3b55a5864baf9b9f464568e75bd5_97\' type=\'hidden\' value="0.5" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{19F3E919-4991-495F-9207-E1DADFD06F54}?lang=en&ver=1","custom":{},"displayName":"Value","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_19F3E9194991495F9207E1DADFD06F54_F917C9511F754D62B14ABC6888D7EECA_en_1_a47c3b55a5864baf9b9f464568e75bd5_97_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">0.5</span>',
              },
            },
          },
          ChangeFrequency: {
            id: 'd23b4654-53a5-4589-8b1b-5665a763d144',
            url: 'https://projarchivesc.dev.local/sitecore/login/sitecore/system/Settings/Foundation/Experience-Accelerator/SiteMetadata/Enums/SitemapChangeFrequency/daily?sc_mode=edit',
            name: 'daily',
            displayName: 'daily',
            fields: {
              Value: {
                value: 'Daily',
                editable:
                  '<input id=\'fld_D23B465453A545898B1B5665A763D144_F917C9511F754D62B14ABC6888D7EECA_en_1_68f0d54271e34d57b9dc9ebdecbde310_98\' class=\'scFieldValue\' name=\'fld_D23B465453A545898B1B5665A763D144_F917C9511F754D62B14ABC6888D7EECA_en_1_68f0d54271e34d57b9dc9ebdecbde310_98\' type=\'hidden\' value="Daily" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{D23B4654-53A5-4589-8B1B-5665A763D144}?lang=en&ver=1","custom":{},"displayName":"Value","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_D23B465453A545898B1B5665A763D144_F917C9511F754D62B14ABC6888D7EECA_en_1_68f0d54271e34d57b9dc9ebdecbde310_98_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">Daily</span>',
              },
            },
          },
          'Page Design': null,
        },
      },
      {
        id: 'bcee3ec2-1d4d-4815-91f8-ca2ae2995790',
        url: '/krinal-test?sc_site=projectarchive',
        name: 'krinal-test',
        displayName: 'krinal-test',
        fields: {
          Title: {
            value: 'krinal-test',
            editable:
              '<input id=\'fld_BCEE3EC21D4D481591F8CA2AE2995790_6377A3EFA32F4A7EBBE4C714226B8657_en_1_05ab56c0a35240e59d03cd0dac8eb11f_99\' class=\'scFieldValue\' name=\'fld_BCEE3EC21D4D481591F8CA2AE2995790_6377A3EFA32F4A7EBBE4C714226B8657_en_1_05ab56c0a35240e59d03cd0dac8eb11f_99\' type=\'hidden\' value="krinal-test" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{BCEE3EC2-1D4D-4815-91F8-CA2AE2995790}?lang=en&ver=1","custom":{},"displayName":"Title","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_BCEE3EC21D4D481591F8CA2AE2995790_6377A3EFA32F4A7EBBE4C714226B8657_en_1_05ab56c0a35240e59d03cd0dac8eb11f_99_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">krinal-test</span>',
          },
          Content: {
            value: '',
            editable:
              '<input id=\'fld_BCEE3EC21D4D481591F8CA2AE2995790_7B3E1EF176394FA58EBDFD5B9E66C0C8_en_1_05ab56c0a35240e59d03cd0dac8eb11f_100\' class=\'scFieldValue\' name=\'fld_BCEE3EC21D4D481591F8CA2AE2995790_7B3E1EF176394FA58EBDFD5B9E66C0C8_en_1_05ab56c0a35240e59d03cd0dac8eb11f_100\' type=\'hidden\' value="" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"},{"click":"chrome:field:editcontrol({command:\\"webedit: edithtml\\"})","header":"Edit Text","icon":"/temp/iconcache/office/16x16/pencil.png","disabledIcon":"/temp/pencil_disabled16x16.png","isDivider":false,"tooltip":"Edit the text","type":""},{"click":"chrome:field:execute({command:\\"bold\\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_bold.png","disabledIcon":"/temp/font_style_bold_disabled16x16.png","isDivider":false,"tooltip":"Bold","type":""},{"click":"chrome:field:execute({command:\\"Italic\\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_italics.png","disabledIcon":"/temp/font_style_italics_disabled16x16.png","isDivider":false,"tooltip":"Italic","type":""},{"click":"chrome:field:execute({command:\\"Underline\\", userInterface:true, value:true})","header":"","icon":"/temp/iconcache/office/16x16/font_style_underline.png","disabledIcon":"/temp/font_style_underline_disabled16x16.png","isDivider":false,"tooltip":"Underline","type":""},{"click":"chrome:field:insertlink","header":"","icon":"/temp/iconcache/office/16x16/link.png","disabledIcon":"/temp/link_disabled16x16.png","isDivider":false,"tooltip":"Insert a link into the text field.","type":""},{"click":"chrome:field:insertimage","header":"Insert image","icon":"/temp/iconcache/office/16x16/photo_landscape.png","disabledIcon":"/temp/photo_landscape_disabled16x16.png","isDivider":false,"tooltip":"Insert an image into the text field.","type":""}],"contextItemUri":"sitecore://master/{BCEE3EC2-1D4D-4815-91F8-CA2AE2995790}?lang=en&ver=1","custom":{},"displayName":"Content","expandedDisplayName":null}</span><span class="scWebEditInput" id="fld_BCEE3EC21D4D481591F8CA2AE2995790_7B3E1EF176394FA58EBDFD5B9E66C0C8_en_1_05ab56c0a35240e59d03cd0dac8eb11f_100_edit" contenteditable="true" scWatermark="true" scDefaultText="[No text in field]" scFieldType="rich text">[No text in field]</span>',
          },
          NavigationTitle: {
            value: 'krinal-tset',
            editable:
              '<input id=\'fld_BCEE3EC21D4D481591F8CA2AE2995790_4E0720E99D504DDC87CFECD65E8E94C8_en_1_05ab56c0a35240e59d03cd0dac8eb11f_101\' class=\'scFieldValue\' name=\'fld_BCEE3EC21D4D481591F8CA2AE2995790_4E0720E99D504DDC87CFECD65E8E94C8_en_1_05ab56c0a35240e59d03cd0dac8eb11f_101\' type=\'hidden\' value="krinal-tset" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{BCEE3EC2-1D4D-4815-91F8-CA2AE2995790}?lang=en&ver=1","custom":{},"displayName":"Link caption in navigation","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_BCEE3EC21D4D481591F8CA2AE2995790_4E0720E99D504DDC87CFECD65E8E94C8_en_1_05ab56c0a35240e59d03cd0dac8eb11f_101_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">krinal-tset</span>',
          },
          NavigationClass: null,
          NavigationFilter: [],
          Priority: {
            id: '19f3e919-4991-495f-9207-e1dadfd06f54',
            url: 'https://projarchivesc.dev.local/sitecore/login/sitecore/system/Settings/Foundation/Experience-Accelerator/SiteMetadata/Enums/SitemapPriority/05?sc_mode=edit',
            name: '05',
            displayName: '0.5',
            fields: {
              Value: {
                value: '0.5',
                editable:
                  '<input id=\'fld_19F3E9194991495F9207E1DADFD06F54_F917C9511F754D62B14ABC6888D7EECA_en_1_a47c3b55a5864baf9b9f464568e75bd5_102\' class=\'scFieldValue\' name=\'fld_19F3E9194991495F9207E1DADFD06F54_F917C9511F754D62B14ABC6888D7EECA_en_1_a47c3b55a5864baf9b9f464568e75bd5_102\' type=\'hidden\' value="0.5" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{19F3E919-4991-495F-9207-E1DADFD06F54}?lang=en&ver=1","custom":{},"displayName":"Value","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_19F3E9194991495F9207E1DADFD06F54_F917C9511F754D62B14ABC6888D7EECA_en_1_a47c3b55a5864baf9b9f464568e75bd5_102_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">0.5</span>',
              },
            },
          },
          ChangeFrequency: {
            id: 'd23b4654-53a5-4589-8b1b-5665a763d144',
            url: 'https://projarchivesc.dev.local/sitecore/login/sitecore/system/Settings/Foundation/Experience-Accelerator/SiteMetadata/Enums/SitemapChangeFrequency/daily?sc_mode=edit',
            name: 'daily',
            displayName: 'daily',
            fields: {
              Value: {
                value: 'Daily',
                editable:
                  '<input id=\'fld_D23B465453A545898B1B5665A763D144_F917C9511F754D62B14ABC6888D7EECA_en_1_68f0d54271e34d57b9dc9ebdecbde310_103\' class=\'scFieldValue\' name=\'fld_D23B465453A545898B1B5665A763D144_F917C9511F754D62B14ABC6888D7EECA_en_1_68f0d54271e34d57b9dc9ebdecbde310_103\' type=\'hidden\' value="Daily" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{D23B4654-53A5-4589-8B1B-5665A763D144}?lang=en&ver=1","custom":{},"displayName":"Value","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_D23B465453A545898B1B5665A763D144_F917C9511F754D62B14ABC6888D7EECA_en_1_68f0d54271e34d57b9dc9ebdecbde310_103_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">Daily</span>',
              },
            },
          },
          'Page Design': null,
        },
      },
    ],
    Logo: {
      value: {
        src: '/sitecore/shell/-/media/Default-Website/sc_logo.png?h=51&iar=0&w=204',
        alt: '',
        width: '204',
        height: '51',
      },
      editable:
        '<input id=\'fld_6032BC88F96A44E5872598538BFDAE31_D4E2C39491EE42638C28FBE0BF2ED953_en_1_90d83e94cc854d27b834068bb323f761_104\' class=\'scFieldValue\' name=\'fld_6032BC88F96A44E5872598538BFDAE31_D4E2C39491EE42638C28FBE0BF2ED953_en_1_90d83e94cc854d27b834068bb323f761_104\' type=\'hidden\' value="&lt;image mediaid=&quot;{094AED03-02E7-4868-80CB-19926661FB77}&quot; /&gt;" /><code class="scpm" id="fld_6032BC88F96A44E5872598538BFDAE31_D4E2C39491EE42638C28FBE0BF2ED953_en_1_90d83e94cc854d27b834068bb323f761_104_edit" type="text/sitecore" scFieldType="image" chromeType="field" kind="open">{"commands":[{"click":"chrome:field:editcontrol({command:\\"webedit: chooseimage\\"})","header":"Choose Image","icon":"/sitecore/shell/themes/standard/custom/16x16/photo_landscape2.png","disabledIcon":"/temp/photo_landscape2_disabled16x16.png","isDivider":false,"tooltip":"Choose an image.","type":""},{"click":"chrome:field:editcontrol({command:\\"webedit: editimage\\"})","header":"Properties","icon":"/sitecore/shell/themes/standard/custom/16x16/photo_landscape2_edit.png","disabledIcon":"/temp/photo_landscape2_edit_disabled16x16.png","isDivider":false,"tooltip":"Modify image appearance.","type":""},{"click":"chrome:field:editcontrol({command:\\"webedit: clearimage\\"})","header":"Clear","icon":"/sitecore/shell/themes/standard/custom/16x16/photo_landscape2_delete.png","disabledIcon":"/temp/photo_landscape2_delete_disabled16x16.png","isDivider":false,"tooltip":"Remove the image.","type":""},{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{6032BC88-F96A-44E5-8725-98538BFDAE31}?lang=en&ver=1","custom":{},"displayName":"Logo","expandedDisplayName":null}</code><img src="/sitecore/shell/-/media/Default-Website/sc_logo.png?h=51&amp;iar=0&amp;w=204" alt="" width="204" height="51" /><code class="scpm" type="text/sitecore" chromeType="field" kind="close"></code>',
    },
    TagLine: {
      value: 'tag line content',
      editable:
        '<input id=\'fld_6032BC88F96A44E5872598538BFDAE31_6B656EB643E546E1882DBBE8834B14F7_en_1_90d83e94cc854d27b834068bb323f761_105\' class=\'scFieldValue\' name=\'fld_6032BC88F96A44E5872598538BFDAE31_6B656EB643E546E1882DBBE8834B14F7_en_1_90d83e94cc854d27b834068bb323f761_105\' type=\'hidden\' value="tag line content" /><span class="scChromeData">{"commands":[{"click":"chrome:common:edititem({command:\\"webedit: open\\"})","header":"Edit the related item","icon":"/temp/iconcache/office/16x16/cubes.png","disabledIcon":"/temp/cubes_disabled16x16.png","isDivider":false,"tooltip":"Edit the related item in the Content Editor.","type":"common"},{"click":"chrome:rendering:personalize({command:\\"webedit: personalize\\"})","header":"Personalize","icon":"/temp/iconcache/office/16x16/users_family.png","disabledIcon":"/temp/users_family_disabled16x16.png","isDivider":false,"tooltip":"Create or edit personalization for this component.","type":"sticky"},{"click":"chrome:rendering:editvariations({command:\\"webedit: editvariations\\"})","header":"Edit variations","icon":"/temp/iconcache/office/16x16/windows.png","disabledIcon":"/temp/windows_disabled16x16.png","isDivider":false,"tooltip":"Edit the variations.","type":"sticky"}],"contextItemUri":"sitecore://master/{6032BC88-F96A-44E5-8725-98538BFDAE31}?lang=en&ver=1","custom":{},"displayName":"TagLine","expandedDisplayName":null}</span><span sc_parameters="prevent-line-break=true" class="scWebEditInput" id="fld_6032BC88F96A44E5872598538BFDAE31_6B656EB643E546E1882DBBE8834B14F7_en_1_90d83e94cc854d27b834068bb323f761_105_edit" contenteditable="true" scDefaultText="[No text in field]" scFieldType="single-line text">tag line content</span>',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
