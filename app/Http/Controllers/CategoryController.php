<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
       $categoryList = Category::all();
       return response()->json([
           'categoryList' => $categoryList,
       ],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->formValidation($request);

        $category = new Category();
        $category->cat_name = $request->cat_name;
        $category->save();

        return ['status' => 'success'];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {
       $categoryEditById = Category::findOrFail($id);
       return response()->json(['categoryEditById' => $categoryEditById],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return string[]
     */
    public function update(Request $request, Category $category,$id)
    {
       $categories = Category::findOrFail($id);
        $categories->cat_name = $request->cat_name;
        $categories->save();
        return ['status' => 'success'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category,$id)
    {
        $category = Category::destroy($id);
        return ['status' => 'success'];
    }

    public function formValidation($request)
    {
        $this->validate($request,[
            'cat_name' => 'required'
        ]);
    }
}
