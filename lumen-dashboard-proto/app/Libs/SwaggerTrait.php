<?php

namespace App\Libs;

use Illuminate\Contracts\Support\Arrayable;

trait SwaggerTrait
{
  /**
   * @param $swaggerObject
   * @return array
   */
  public function castToArray($swaggerObject)
  {
    if (is_object($swaggerObject) && strpos(get_class($swaggerObject), 'Swagger') !== false ) {

        //This is a Swagger object

        //Extract array from swagger object
        $arr = (array) $swaggerObject;
        $container = reset($arr);

        foreach ($container as  $key => $value) {

            $container[$key] = $this->castToArray($value);

        }

        return $container;

    } elseif (is_object($swaggerObject)) {

        return (array) $swaggerObject;

    } elseif ($swaggerObject instanceof Arrayable) {

        return $swaggerObject->toArray();

    } elseif (is_array($swaggerObject)) {

        $container = array();

        foreach ($swaggerObject as  $key => $value) {


            $container[$key] = $this->castToArray($value);

        }

        return $container;

    } else {

        //no cast
        return $swaggerObject;

    }
  }

}