import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import md from '../../markdown/renderer';
import ExampleWrapper from '../../ExampleWrapper';
import {
  CustomClearIndicator,
  CustomDropdownIndicator,
  CustomLoadingIndicator,
  CustomLoadingMessage,
  CustomIndicatorsContainer,
  CustomIndicatorSeparator,
  CustomNoOptionsMessage,
  CustomMultiValueContainer,
  CustomMultiValueRemove,
  CustomMultiValueLabel,
  CustomControl,
  CustomGroup,
  CustomInput,
  CustomOption,
  CustomMenu,
  CustomMenuList,
  CustomPlaceholder,
  CustomSelectContainer,
  CustomSingleValue,
  CustomGroupHeading,
  CustomValueContainer,
} from '../../examples';


export default function Components() {
  return (
    <Fragment>
      <Helmet>
        <title>Components - React Select</title>
        <meta
          name="description"
          content="The main feature of this library is providing consumers with the building blocks necessary to create their component."
        />
      </Helmet>
      {md`
        # Components

        The main feature of this library is providing consumers with the
        building blocks necessary to create _their_ component.

        The following components are customisable and switchable:

        ## Replacing Components

        React-Select allows you to augment layout and functionality by replacing
        the default components with your own, using the \`components\`
        property. These components are given all the current props and state
        letting you achieve anything you dream up.

        ### Inner Props

        All functional properties that the component needs are provided in
        \`innerProps\` which you must spread.

        ### Common Props

        Every component receives \`commonProps\` which are spread onto
        the component. These include:

        * \`clearValue\`
        * \`getStyles\`
        * \`getValue\`
        * \`hasValue\`
        * \`isMulti\`
        * \`isRtl\`
        * \`options\`
        * \`selectOption\`
        * \`setValue\`
        * \`selectProps\`

        ~~~jsx
        import React from 'react';
        import Select from 'react-select';

        const CustomOption = ({ innerProps, isDisabled }) =>
        !isDisabled ? (
        <div {...innerProps}>// your component internals</div>
        ) : null;

        class Component extends React.Component {
        render() {
        return <Select components={{ Option: CustomOption }} />;
        }
        }
        ~~~

        ## Adjusting the Styling

        The \`styles\` prop allows you to pass styles to a particular component, without
        replacing the entire component. If you only want to change styling, you should
        start by using the \`styles\` prop.

        ## Replaceable components

        ### ClearIndicator

        The indicator presented to clear the values from the component. The default
        component is a cross. The conditions under which the indicator will not be
        rendered when:

        * When \`isClearable\` is false, or when \`isMulti\` is false, and \`isClearable\` is undefined
        * When the select is disabled
        * When the select has no value
        * When the select is loading

        See [api docs](/api#clearindicator) for more details

        ${
          <ExampleWrapper
            label="Custom ClearIndicator Example"
            urlPath="docs/examples/CustomClearIndicator.js"
            raw={require('!!raw-loader!../../examples/CustomClearIndicator.js')}
          >
            <CustomClearIndicator/>
          </ExampleWrapper>
        }

        ### Control

        The second highest level wrapper around the components. It is responsible for the
        positioning of the \`ValueContainer\` and \`IndicatorsContainer\`. It is followed
        by the Menu.

        See [api docs](/api#control) for more details

        ${
          <ExampleWrapper
            label="Custom Control Example"
            urlPath="docs/examples/CustomControl.js"
            raw={require('!!raw-loader!../../examples/CustomControl.js')}
          >
            <CustomControl/>
          </ExampleWrapper>
        }

        ### Dropdown Indicator

        The indicator for opening the select, designed to indicate to users that
        this is a select. By default it is a chevron pointed down.

        See [api docs](/api#dropdownindicator) for more details

        ${
          <ExampleWrapper
            label="Custom Dropdown Indicator Example"
            urlPath="docs/examples/CustomDropdownIndicator.js"
            raw={require('!!raw-loader!../../examples/CustomDropdownIndicator.js')}
          >
            <CustomDropdownIndicator/>
          </ExampleWrapper>
        }

        ### Group

        The wrapper around each group if the Select has groups in its data. The default
        component is responsible both for mapping its options, as well as rendering
        its data into the GroupHeading.

        See [api docs](/api#group) for more details

        ${
          <ExampleWrapper
            label="Custom Group Example"
            urlPath="docs/examples/CustomGroup.js"
            raw={require('!!raw-loader!../../examples/CustomGroup.js')}
          >
            <CustomGroup/>
          </ExampleWrapper>
        }

        ### GroupHeading

        Component that renders the data of a group.

        See [api docs](/api#groupheading) for more details

        ${
          <ExampleWrapper
            label="Custom GroupHeading Example"
            urlPath="docs/examples/CustomGroupHeading.js"
            raw={require('!!raw-loader!../../examples/CustomGroupHeading.js')}
          >
            <CustomGroupHeading/>
          </ExampleWrapper>
        }

        ### IndicatorsContainer

        Wraps the indicators. This is one of the two components directly under the
        control. The indicators that \`react-select\` will check to render by are:

        * Clear Indicator
        * Loading Indicator
        * Dropdown Indicator

        See [api docs](/api#indicatorscontainer) for more details

        ${
          <ExampleWrapper
            label="Custom IndicatorsContainer Example"
            urlPath="docs/examples/CustomIndicatorsContainer.js"
            raw={require('!!raw-loader!../../examples/CustomIndicatorsContainer.js')}
          >
            <CustomIndicatorsContainer />
          </ExampleWrapper>
        }

        ### Indicator Separator

        Component directly to the the inner side of the Dropdown Indicator. By default
        it is a line to act as a visual separator.

        See [api docs](/api#customindicatorseparator) for more details

        ${
          <ExampleWrapper
            label="Custom IndicatorSeparator Example"
            urlPath="docs/examples/CustomIndicatorSeparator.js"
            raw={require('!!raw-loader!../../examples/CustomIndicatorSeparator.js')}
          >
            <CustomIndicatorSeparator />
          </ExampleWrapper>
        }

        ### Input

        Input to render when an input is required. If the select is not searchable,
        a dummy input is rendered instead. If the select is disabled, a div of the
        correct size and shape is rendered.

        All provided inputs are given aria attributes to ensure the input is accessible
        by default.

        See [api docs](/api#input) for more details

        ${
          <ExampleWrapper
            label="Custom Input Example"
            urlPath="docs/examples/CustomInput.js"
            raw={require('!!raw-loader!../../examples/CustomInput.js')}
          >
            <CustomInput/>
          </ExampleWrapper>
        }

        ### LoadingIndicator

        Loading indicator to be displayed in the Indicators Container when \`isLoading]\`
        is true. By default it is three dots.

        See [api docs](/api#loadingindicator) for more details

        ${
          <ExampleWrapper
            label="Custom LoadingIndicator Example"
            urlPath="docs/examples/CustomLoadingIndicator.js"
            raw={require('!!raw-loader!../../examples/CustomLoadingIndicator.js')}
          >
            <CustomLoadingIndicator/>
          </ExampleWrapper>
        }

        ### Menu

        The wrapper for the dropdown menu in the select. It is responsible for wrapping
        the menu items. If you want to modify the options themselves, you should use
        the \`Option\` component.

        See [api docs](/api#menu) for more details

        ${
          <ExampleWrapper
            label="Custom Menu Example"
            urlPath="docs/examples/CustomMenu.js"
            raw={require('!!raw-loader!../../examples/CustomMenu.js')}
          >
            <CustomMenu/>
          </ExampleWrapper>
        }

        ### MenuList

        Inner wrapper for the menu. It directly wraps around the returned options.

        See [api docs](/api#menulist) for more details

        ${
          <ExampleWrapper
            label="Custom MenuList Example"
            urlPath="docs/examples/CustomMenuList.js"
            raw={require('!!raw-loader!../../examples/CustomMenuList.js')}
          >
            <CustomMenuList/>
          </ExampleWrapper>
        }

        ### LoadingMessage

        Message to display in the menu when there are no options and \`isLoading\` is
        true. By default it is 'Loading...'

        See [api docs](/api#loadingmessage) for more details

        ${
          <ExampleWrapper
            label="Custom LoadingMessage Example"
            urlPath="docs/examples/CustomLoadingMessage.js"
            raw={require('!!raw-loader!../../examples/CustomLoadingMessage.js')}
          >
            <CustomLoadingMessage/>
          </ExampleWrapper>
        }

        ### NoOptionsMessage

        Message to be displayed in the menu if there are no options passed in.

        See [api docs](/api#nooptionsmessage) for more details

        ${
          <ExampleWrapper
            label="Custom NoOptionsMessage Example"
            urlPath="docs/examples/CustomNoOptionsMessage.js"
            raw={require('!!raw-loader!../../examples/CustomNoOptionsMessage.js')}
          >
            <CustomNoOptionsMessage/>
          </ExampleWrapper>
        }

        ### MultiValue

        Component used to display a selected option in the input when \`isMult\` is
        true. Takes responsibility for rendering the \`MultiValueContainer\`,
        \`MultiValueLabel\`, and \`MultiValueRemove\`.

        #### MultiValueContainer

        Wraps the Label and Remove in a Multi Value

        See [api docs](/api#multivaluecontainer) for more details

        ${
          <ExampleWrapper
            label="Custom MultiValueContainer Example"
            urlPath="docs/examples/CustomMultiValueContainer.js"
            raw={require('!!raw-loader!../../examples/CustomMultiValueContainer.js')}
          >
            <CustomMultiValueContainer/>
          </ExampleWrapper>
        }

        ### MultiValueLabel

        Receives the value of the option and is responsible for rendering it to the
        input.

        See [api docs](/api#multivaluelabel) for more details

        ${
          <ExampleWrapper
            label="Custom MultiValueLabel Example"
            urlPath="docs/examples/CustomMultiValueLabel.js"
            raw={require('!!raw-loader!../../examples/CustomMultiValueLabel.js')}
          >
            <CustomMultiValueLabel/>
          </ExampleWrapper>
        }


        ### MultiValueRemove

        Receives an onClick to remove the selected item. By default it is a cross.

        See [api docs](/api#multivalueremove) for more details

        ${
          <ExampleWrapper
            label="Custom MultiValueRemove Example"
            urlPath="docs/examples/CustomMultiValueRemove.js"
            raw={require('!!raw-loader!../../examples/CustomMultiValueRemove.js')}
          >
            <CustomMultiValueRemove/>
          </ExampleWrapper>
        }

        ### Option

        Component responsible for displaying an option in the menu.

        See [api docs](/api#option) for more details

        ${
          <ExampleWrapper
            label="Custom Option Example"
            urlPath="docs/examples/CustomOption.js"
            raw={require('!!raw-loader!../../examples/CustomOption.js')}
          >
            <CustomOption/>
          </ExampleWrapper>
        }


        ### Placeholder

        Component to be displayed in the input when nothing is selected. By default
        it is the text 'Select...'

        See [api docs](/api#placeholder) for more details

        ${
          <ExampleWrapper
            label="Custom Placeholder Example"
            urlPath="docs/examples/CustomPlaceholder.js"
            raw={require('!!raw-loader!../../examples/CustomPlaceholder.js')}
          >
            <CustomPlaceholder/>
          </ExampleWrapper>
        }

        ### SelectContainer

        The wrapper around the entire select component.

        See [api docs](/api#selectcontainer) for more details

        ${
          <ExampleWrapper
            label="Custom SelectContainer Example"
            urlPath="docs/examples/CustomSelectContainer.js"
            raw={require('!!raw-loader!../../examples/CustomSelectContainer.js')}
          >
            <CustomSelectContainer/>
          </ExampleWrapper>
        }

        ### SingleValue

        The component that displays the selected value in the input for a single select.

        See [api docs](/api#singlevalue) for more details

        ${
          <ExampleWrapper
            label="Custom SingleValue Example"
            urlPath="docs/examples/CustomSingleValue.js"
            raw={require('!!raw-loader!../../examples/CustomSingleValue.js')}
          >
            <CustomSingleValue/>
          </ExampleWrapper>
        }

        ### ValueContainer

        Container responsible for loading the placeholder value and the input.

        See [api docs](/api#valuecontainer) for more details

        ${
          <ExampleWrapper
            label="Custom ValueContainer Example"
            urlPath="docs/examples/CustomValueContainer.js"
            raw={require('!!raw-loader!../../examples/CustomValueContainer.js')}
          >
            <CustomValueContainer/>
          </ExampleWrapper>
        }
      `}
</Fragment>);
}