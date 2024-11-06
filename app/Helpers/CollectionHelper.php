use Illuminate\Support\Collection;

class CollectionHelper
{
    public static function sortByCollator($collect, $callback, $options = \Collator::SORT_STRING, $descending = false)
    {
        $results = [];

        $callback = static::valueRetriever($callback);

        foreach ($collect->all() as $key => $value) {
            $results[$key] = $callback($value, $key);
        }

        static::getCollator()->asort($results, $options);
        if ($descending) {
            $results = array_reverse($results);
        }

        foreach (array_keys($results) as $key) {
            $results[$key] = $collect->get($key);
        }

        return new Collection($results);
    }
    //
}