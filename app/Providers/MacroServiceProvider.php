use App\Helpers\CollectionHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\ServiceProvider;

class MacroServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if (! Collection::hasMacro('sortByCollator')) {
            Collection::macro('sortByCollator', function ($callback, $options = \Collator::SORT_STRING, $descending = false) {
                $collect = $this;

                return CollectionHelper::sortByCollator($collect, $callback, $options, $descending);
            });
        }
        //
    }
}