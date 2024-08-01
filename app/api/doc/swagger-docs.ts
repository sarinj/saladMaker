/**
 * @swagger
 * /api/ingredients:
 *   get:
 *     summary: Retrieve a list of ingredients
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term for ingredients
 *       - in: query
 *         name: category[]
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *         description: Filter by categories
 *     responses:
 *       200:
 *         description: A list of ingredients
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ingredients:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       ingredient:
 *                         type: string
 *                       category:
 *                         type: string
 *                         example: "vegetable"
 *                       image:
 *                         type: string
 *                       calories:
 *                         type: number
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/ingredients:
 *   post:
 *     summary: Create a list of ingredients
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     ingredient:
 *                       type: string
 *                     category:
 *                       type: string
 *                       example: "vegetable"
 *                     image:
 *                       type: string
 *                     calories:
 *                       type: number
 *     responses:
 *       201:
 *         description: Ingredients created
 *       400:
 *         description: Ingredients should be an array
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/recipes:
 *   get:
 *     summary: Retrieve a list of recipes
 *     responses:
 *       200:
 *         description: A list of recipes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recipes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       totalCalories:
 *                         type: number
 *       500:
 *         description: Internal server error
 *   post:
 *     summary: Create a new recipe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     image:
 *                       type: string
 *                     calories:
 *                       type: number
 *                     quantity:
 *                       type: string
 *               totalCalories:
 *                 type: number
 *     responses:
 *       201:
 *         description: Recipe created
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/recipes/{id}:
 *   get:
 *     summary: Get a recipe by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the recipe to retrieve
 *     responses:
 *       200:
 *         description: Recipe retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 ingredients:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       image:
 *                         type: string
 *                       calories:
 *                         type: number
 *                       quantity:
 *                         type: number
 *                 totalCalories:
 *                   type: number
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Recipe ID is required
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error message
 *   delete:
 *     summary: Delete a recipe by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the recipe to delete
 *     responses:
 *       200:
 *         description: Recipe deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Recipe deleted
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Recipe ID is required
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error message
 *   patch:
 *     summary: Update recipe
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the recipe to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     image:
 *                       type: string
 *                     calories:
 *                       type: number
 *                     quantity:
 *                       type: number
 *               totalCalories:
 *                 type: number
 *     responses:
 *       201:
 *         description: Recipe updated
 *       500:
 *         description: Internal Server Error
 */
