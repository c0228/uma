<?php
/**
 * @SWG\Swagger(
 *     schemes={"http"},
 *     host="api.example.com",
 *     basePath="/v1",
 *     @SWG\Info(
 *         version="1.0.0",
 *         title="Simple API",
 *         description="A simple API example",
 *         @SWG\Contact(name="API Support", email="support@example.com"),
 *     )
 * )
 */

/**
 * @SWG\Get(
 *     path="/items",
 *     summary="List all items",
 *     @SWG\Response(
 *         response=200,
 *         description="A list of items",
 *         @SWG\Schema(
 *             type="array",
 *             @SWG\Items(ref="#/definitions/Item")
 *         )
 *     )
 * )
 */
function getItems() {
    // Your code to retrieve items
}

/**
 * @SWG\Post(
 *     path="/items",
 *     summary="Create a new item",
 *     @SWG\Parameter(
 *         name="item",
 *         in="body",
 *         required=true,
 *         @SWG\Schema(ref="#/definitions/Item")
 *     ),
 *     @SWG\Response(
 *         response=201,
 *         description="Item created"
 *     )
 * )
 */
function createItem() {
    // Your code to create a new item
}

/**
 * @SWG\Definition(
 *     definition="Item",
 *     required={"name"},
 *     @SWG\Property(
 *         property="id",
 *         type="integer",
 *         format="int64"
 *     ),
 *     @SWG\Property(
 *         property="name",
 *         type="string"
 *     ),
 *     @SWG\Property(
 *         property="description",
 *         type="string"
 *     )
 * )
 */
class Item {
    public $id;
    public $name;
    public $description;
}
?>
