<?php
//namespace Database\Seeds;
use Illuminate\Database\Seeder;
use App\Models\LightSeizedShippingOrder; 

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\LightSeizedShippingOrder::class, 4000)->create();    
    }
}
