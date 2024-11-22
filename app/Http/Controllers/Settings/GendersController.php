class GendersController extends Controller
{
    public function index()
    {
        $gendersData = collect([]);
        $genders = auth()->user()->account->genders;

        foreach ($genders as $gender) {
            $gendersData->push($this->formatData($gender));
        }

        return CollectionHelper::sortByCollator($gendersData, 'name');
    }
    //
}