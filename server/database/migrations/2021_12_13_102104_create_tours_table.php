<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->string('title', 1000)->nullable();
            $table->integer('destination_from')->nullable(0);
            $table->integer('destination_to')->nullable(0);
            $table->string('availability', 1000)->nullable();
            $table->string('package_num', 10)->nullable();
            $table->text('details')->nullable();
            $table->text('itinerary')->nullable();
            $table->text('gallery')->nullable();
            $table->integer('created_by')->default(0);
            $table->integer('is_deleted')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tours');
    }
}
