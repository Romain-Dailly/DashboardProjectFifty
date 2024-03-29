<?php
/**
 * Carrier
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Fifty Truck API
 *
 * This is the API of fifty truck
 *
 * OpenAPI spec version: 0.1.0
 * Contact: contact@fiftytruck.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.9
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Client\Model;

use \ArrayAccess;
use \Swagger\Client\ObjectSerializer;

/**
 * Carrier Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class Carrier implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'Carrier';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'id' => 'int',
        'company_name' => 'string',
        'is_approved' => 'bool',
        'tms_connected' => 'bool',
        'fms_connected' => 'bool',
        'head_office_address_street_name' => 'string',
        'head_office_address_postcode' => 'string',
        'head_office_address_city' => 'string',
        'head_office_address_country' => 'string',
        'metadata' => 'object'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'id' => 'int64',
        'company_name' => 'string',
        'is_approved' => null,
        'tms_connected' => null,
        'fms_connected' => null,
        'head_office_address_street_name' => 'string',
        'head_office_address_postcode' => 'string',
        'head_office_address_city' => 'string',
        'head_office_address_country' => 'string',
        'metadata' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'id' => 'id',
        'company_name' => 'companyName',
        'is_approved' => 'isApproved',
        'tms_connected' => 'tmsConnected',
        'fms_connected' => 'fmsConnected',
        'head_office_address_street_name' => 'headOfficeAddressStreetName',
        'head_office_address_postcode' => 'headOfficeAddressPostcode',
        'head_office_address_city' => 'headOfficeAddressCity',
        'head_office_address_country' => 'headOfficeAddressCountry',
        'metadata' => 'metadata'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'company_name' => 'setCompanyName',
        'is_approved' => 'setIsApproved',
        'tms_connected' => 'setTmsConnected',
        'fms_connected' => 'setFmsConnected',
        'head_office_address_street_name' => 'setHeadOfficeAddressStreetName',
        'head_office_address_postcode' => 'setHeadOfficeAddressPostcode',
        'head_office_address_city' => 'setHeadOfficeAddressCity',
        'head_office_address_country' => 'setHeadOfficeAddressCountry',
        'metadata' => 'setMetadata'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'company_name' => 'getCompanyName',
        'is_approved' => 'getIsApproved',
        'tms_connected' => 'getTmsConnected',
        'fms_connected' => 'getFmsConnected',
        'head_office_address_street_name' => 'getHeadOfficeAddressStreetName',
        'head_office_address_postcode' => 'getHeadOfficeAddressPostcode',
        'head_office_address_city' => 'getHeadOfficeAddressCity',
        'head_office_address_country' => 'getHeadOfficeAddressCountry',
        'metadata' => 'getMetadata'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['company_name'] = isset($data['company_name']) ? $data['company_name'] : null;
        $this->container['is_approved'] = isset($data['is_approved']) ? $data['is_approved'] : null;
        $this->container['tms_connected'] = isset($data['tms_connected']) ? $data['tms_connected'] : null;
        $this->container['fms_connected'] = isset($data['fms_connected']) ? $data['fms_connected'] : null;
        $this->container['head_office_address_street_name'] = isset($data['head_office_address_street_name']) ? $data['head_office_address_street_name'] : null;
        $this->container['head_office_address_postcode'] = isset($data['head_office_address_postcode']) ? $data['head_office_address_postcode'] : null;
        $this->container['head_office_address_city'] = isset($data['head_office_address_city']) ? $data['head_office_address_city'] : null;
        $this->container['head_office_address_country'] = isset($data['head_office_address_country']) ? $data['head_office_address_country'] : null;
        $this->container['metadata'] = isset($data['metadata']) ? $data['metadata'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets id
     *
     * @return int
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int $id id
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets company_name
     *
     * @return string
     */
    public function getCompanyName()
    {
        return $this->container['company_name'];
    }

    /**
     * Sets company_name
     *
     * @param string $company_name company_name
     *
     * @return $this
     */
    public function setCompanyName($company_name)
    {
        $this->container['company_name'] = $company_name;

        return $this;
    }

    /**
     * Gets is_approved
     *
     * @return bool
     */
    public function getIsApproved()
    {
        return $this->container['is_approved'];
    }

    /**
     * Sets is_approved
     *
     * @param bool $is_approved is_approved
     *
     * @return $this
     */
    public function setIsApproved($is_approved)
    {
        $this->container['is_approved'] = $is_approved;

        return $this;
    }

    /**
     * Gets tms_connected
     *
     * @return bool
     */
    public function getTmsConnected()
    {
        return $this->container['tms_connected'];
    }

    /**
     * Sets tms_connected
     *
     * @param bool $tms_connected tms_connected
     *
     * @return $this
     */
    public function setTmsConnected($tms_connected)
    {
        $this->container['tms_connected'] = $tms_connected;

        return $this;
    }

    /**
     * Gets fms_connected
     *
     * @return bool
     */
    public function getFmsConnected()
    {
        return $this->container['fms_connected'];
    }

    /**
     * Sets fms_connected
     *
     * @param bool $fms_connected fms_connected
     *
     * @return $this
     */
    public function setFmsConnected($fms_connected)
    {
        $this->container['fms_connected'] = $fms_connected;

        return $this;
    }

    /**
     * Gets head_office_address_street_name
     *
     * @return string
     */
    public function getHeadOfficeAddressStreetName()
    {
        return $this->container['head_office_address_street_name'];
    }

    /**
     * Sets head_office_address_street_name
     *
     * @param string $head_office_address_street_name head_office_address_street_name
     *
     * @return $this
     */
    public function setHeadOfficeAddressStreetName($head_office_address_street_name)
    {
        $this->container['head_office_address_street_name'] = $head_office_address_street_name;

        return $this;
    }

    /**
     * Gets head_office_address_postcode
     *
     * @return string
     */
    public function getHeadOfficeAddressPostcode()
    {
        return $this->container['head_office_address_postcode'];
    }

    /**
     * Sets head_office_address_postcode
     *
     * @param string $head_office_address_postcode head_office_address_postcode
     *
     * @return $this
     */
    public function setHeadOfficeAddressPostcode($head_office_address_postcode)
    {
        $this->container['head_office_address_postcode'] = $head_office_address_postcode;

        return $this;
    }

    /**
     * Gets head_office_address_city
     *
     * @return string
     */
    public function getHeadOfficeAddressCity()
    {
        return $this->container['head_office_address_city'];
    }

    /**
     * Sets head_office_address_city
     *
     * @param string $head_office_address_city head_office_address_city
     *
     * @return $this
     */
    public function setHeadOfficeAddressCity($head_office_address_city)
    {
        $this->container['head_office_address_city'] = $head_office_address_city;

        return $this;
    }

    /**
     * Gets head_office_address_country
     *
     * @return string
     */
    public function getHeadOfficeAddressCountry()
    {
        return $this->container['head_office_address_country'];
    }

    /**
     * Sets head_office_address_country
     *
     * @param string $head_office_address_country head_office_address_country
     *
     * @return $this
     */
    public function setHeadOfficeAddressCountry($head_office_address_country)
    {
        $this->container['head_office_address_country'] = $head_office_address_country;

        return $this;
    }

    /**
     * Gets metadata
     *
     * @return object
     */
    public function getMetadata()
    {
        return $this->container['metadata'];
    }

    /**
     * Sets metadata
     *
     * @param object $metadata metadata
     *
     * @return $this
     */
    public function setMetadata($metadata)
    {
        $this->container['metadata'] = $metadata;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


