/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as React from "react";
import { SemanticSIZES, SemanticWIDTHS } from "semantic-ui-react";

/**
 * Form Field Types
 */
export type Type =
    | "email"
    | "text"
    | "textarea"
    | "password"
    | "number"
    | "submit"
    | "radio"
    | "dropdown"
    | "checkbox"
    | "reset"
    | "button"
    | "divider"
    | "custom";

/**
 * Model of the Validation object passed into validation functions
 */
export interface Validation {
    isValid: boolean;
    errorMessages: string[];
}

/**
 * Model of the Error object used by semantic Input elements to check for error
 */
export interface Error {
    isError: boolean;
    errorMessages: string[];
}

interface FormFieldModel {
    name: string;
    label: string;
    listen?: (values: Map<string, FormValue>) => void;
    autoFocus?: boolean;
}

interface FormRequiredFieldModel extends FormFieldModel {
    required: boolean;
    requiredErrorMessage: string;
}
/**
 * Input field model
 */
export interface TextField extends FormRequiredFieldModel {
    type: "text" | "email" | "textarea" | "number";
    width?: SemanticWIDTHS;
    validation?: (value: string, validation: Validation, allValues?: Map<string, FormValue>) => void;
    value?: string;
    placeholder: string;
}

/**
 * Password field model
 */
export interface PasswordField extends FormRequiredFieldModel {
    type: "password";
    width?: SemanticWIDTHS;
    validation?: (value: string, validation: Validation, allValues?: Map<string, FormValue>) => void;
    value?: string;
    showPassword: string;
    hidePassword: string;
    placeholder: string;
}

/**
 * Radio field child model
 */
export interface RadioChild {
    label: string;
    value: string;
}

/**
 * Radio field model
 */
export interface RadioField extends FormFieldModel {
    type: "radio";
    default: string;
    children: RadioChild[];
    value?: string;
}

/**
 * Checkbox field child model
 */
export interface CheckboxChild {
    label: string;
    value: string;
}

/**
 * Checkbox field model
 */
export interface CheckboxField extends FormRequiredFieldModel {
    type: "checkbox";
    children: CheckboxChild[];
    value?: string[];
}

/**
 * Dropdown field child model
 */
export interface DropdownChild {
    text: string;
    value: string;
    key: number;
}

/**
 * Dropdown field model
 */
export interface DropdownField extends FormRequiredFieldModel {
    type: "dropdown";
    default?: string;
    children: DropdownChild[];
    placeholder?: string;
    value?: string;
}

/**
 * Custom field model
 */
export interface CustomField {
    type: Type;
    element: JSX.Element;
}

/**
 * Form submit model
 */
export interface FormSubmit {
    disabled?: (values: Map<string, FormValue>) => boolean;
    value: string;
    type: "submit";
    size?: SemanticSIZES;
    className?: string;
}

/**
 * Reset button model
 */
export interface Reset {
    disabled?: (values: Map<string, FormValue>) => boolean;
    value: string;
    type: "reset";
    size?: SemanticSIZES;
    className?: string;
}

/**
 * Button model
 */
export interface FormButton {
    disabled?: (values: Map<string, FormValue>) => boolean;
    onClick: () => void;
    className?: string;
    size?: SemanticSIZES;
    type: "button";
    value: string;
}

/**
 * Group model
 */
export interface Group {
    startIndex: number;
    endIndex: number;
    wrapper: React.ComponentType;
    wrapperProps: any;
}

/**
 * Divider model
 */
export interface FormDivider {
    type: "divider";
    hidden: boolean;
}

/**
 * FormField types
 */
export type FormField =
    | TextField
    | PasswordField
    | FormSubmit
    | RadioField
    | DropdownField
    | CheckboxField
    | Reset
    | FormButton
    | FormDivider
    | CustomField;

/**
 * FormField value types
 */
export type FormValue = string | string[];
