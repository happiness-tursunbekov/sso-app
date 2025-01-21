<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait ModelCamelCase
{
    public function getAttribute($key)
    {
        return parent::getAttribute($key) ?? parent::getAttribute(Str::snake($key));
    }

    public function setAttribute($key, $value)
    {
        return parent::setAttribute(Str::snake($key), $value);
    }

    public function toCamelCaseJson(): \stdClass
    {
        $attributes = new \stdClass();

        foreach ($this->getAttributes() as $key=>$value)
        {
            $attributes->{Str::camel($key)} = $value;
        }
        return $attributes;
    }

    public function toCamelCaseArray(): array
    {
        $attributes = [];

        foreach ($this->getAttributes() as $key=>$value)
        {
            $attributes[Str::camel($key)] = $value;
        }
        return $attributes;
    }
}
