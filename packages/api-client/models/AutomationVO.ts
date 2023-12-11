/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ActionVO } from '../models/ActionVO';
import { AutomationPropertyVO } from '../models/AutomationPropertyVO';
import { NodeSimpleVO } from '../models/NodeSimpleVO';
import { TriggerVO } from '../models/TriggerVO';
import { UserSimpleVO } from '../models/UserSimpleVO';
import { HttpFile } from '../http/http';

/**
* Automation Vo
*/
export class AutomationVO {
    /**
    * Robot id
    */
    'robotId'?: string;
    /**
    * Robot name
    */
    'name'?: string;
    /**
    * Robot description
    */
    'description'?: string;
    /**
    * Robot resource id
    */
    'resourceId'?: string;
    /**
    * Weather the robot is on use
    */
    'isActive'?: number;
    'updatedBy'?: UserSimpleVO;
    /**
    * updated time(millisecond)
    */
    'updatedAt'?: number;
    'props'?: AutomationPropertyVO;
    /**
    * Recently Run Count for month
    */
    'recentlyRunCount'?: number;
    /**
    * Automation triggers list
    */
    'triggers'?: Array<TriggerVO>;
    /**
    * Automation actions list
    */
    'actions'?: Array<ActionVO>;
    /**
    * Automation related resource list
    */
    'relatedResources'?: Array<NodeSimpleVO>;
    /**
    * Automation run num is over limit
    */
    'isOverLimit'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "robotId",
            "baseName": "robotId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceId",
            "baseName": "resourceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "updatedBy",
            "baseName": "updatedBy",
            "type": "UserSimpleVO",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "props",
            "baseName": "props",
            "type": "AutomationPropertyVO",
            "format": ""
        },
        {
            "name": "recentlyRunCount",
            "baseName": "recentlyRunCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "triggers",
            "baseName": "triggers",
            "type": "Array<TriggerVO>",
            "format": ""
        },
        {
            "name": "actions",
            "baseName": "actions",
            "type": "Array<ActionVO>",
            "format": ""
        },
        {
            "name": "relatedResources",
            "baseName": "relatedResources",
            "type": "Array<NodeSimpleVO>",
            "format": ""
        },
        {
            "name": "isOverLimit",
            "baseName": "isOverLimit",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AutomationVO.attributeTypeMap;
    }

    public constructor() {
    }
}
