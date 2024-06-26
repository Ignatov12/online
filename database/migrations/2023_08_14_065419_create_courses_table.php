<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('instructor');
            $table->string('thumbnail');
            $table->float('rating')->default(0);
            $table->decimal('orig_price', 8, 2);
            $table->decimal('current_price', 8, 2);
            $table->text('overview');
            $table->integer('number_of_purchase')->default(0); // Додано значення за замовчуванням
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
        Schema::dropIfExists('courses');
    }
}
