<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommitmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('commitments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('start');
            $table->date('end');
            $table->timestamps();

            $table->unsignedBigInteger('createdBy');
            $table->foreign('createdBy')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedBigInteger('folderId');
            $table->foreign('folderId')->references('id')->on('folders')->onDelete('cascade');

            $table->unsignedBigInteger('groupId');
            $table->foreign('groupId')->references('id')->on('groups')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('commitments');
    }
}
