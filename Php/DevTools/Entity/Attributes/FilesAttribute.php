<?php
/**
 * Webiny Framework (http://www.webiny.com/framework)
 *
 * @copyright Copyright Webiny LTD
 */

namespace Apps\Core\Php\DevTools\Entity\Attributes;

use Webiny\Component\Entity\Attribute\One2ManyAttribute;
use Webiny\Component\Storage\Storage;

/**
 * File attribute
 * @package Apps\Core\Php\DevTools\Entity\Attributes
 */
class FilesAttribute extends One2ManyAttribute
{
    protected $storage = null;
    protected $tags = [];

    /**
     * @inheritDoc
     */
    public function __construct()
    {
        parent::__construct(null, null, 'ref');
        $this->setEntity('\Apps\Core\Php\Entities\File')->setSorter('order');
    }

    /**
     * Set tags that will always be assigned to the file
     *
     * @param $tags
     *
     * @return $this
     */
    public function setTags(...$tags)
    {
        $this->tags = $tags;

        return $this;
    }

    /**
     * Set storage to use with this attribute
     *
     * @param Storage $storage
     *
     * @return $this
     */
    public function setStorage(Storage $storage)
    {
        $this->storage = $storage;

        return $this;
    }

    public function getValue($params = [], $processCallbacks = true)
    {
        $values = parent::getValue($params, false);

        foreach ($values as $value) {
            $value->tags->merge($this->tags)->unique();
            if ($this->storage) {
                $value->setStorage($this->storage);
            }
        }

        return $processCallbacks ? $this->processGetValue($values, $params) : $values;
    }
}