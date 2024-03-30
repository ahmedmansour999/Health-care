<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('freetimes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->dateTime('doctor_freetimes');
            $table->dateTime('doctor_freetimesto');
            $table->string('days') ;


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('freetimes');
    }
};
