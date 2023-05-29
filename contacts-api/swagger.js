/**
 * @swagger
 * tags:
 *   - name: Contacts
 *     description: Contact operations
 *
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Contact name
 *         email:
 *           type: string
 *           description: Contact email
 *           example: example@gmail.com
 *         phoneNumber:
 *           type: number
 *           description: Contact phone number
 *           example: 5437445775
 *     ContactResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Contact ID
 *         name:
 *           type: string
 *           description: Contact name
 *         email:
 *           type: string
 *           description: Contact email
 *           example: example@gmail.com
 *         phoneNumber:
 *           type: number
 *           description: Contact phone number
 *           example: 5437445775
 *         createdAt:
 *           type: string
 *           format: date
 *           description: Create Date
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: Update Date
 *
 *   responses:
 *     BadRequest:
 *       description: Bad request
 *     Unauthorized:
 *       description: Unauthorized
 *     NotFound:
 *       description: Resource not found
 *
 */

/**
 * @swagger
 * /api/contacts:
 *   get:
 *     summary: Get all contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ContactResponse'
 *                 status:
 *                   type: string
 *                   example: success
 */

/**
 * @swagger
 * /api/contact/{id}:
 *   get:
 *     summary: Get a contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Contact ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *        200:
 *          description: Successful operation
 *          content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ContactResponse'
 *                 status:
 *                   type: string
 *                   example: success
 *        404:
 *          $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: Contact created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ContactResponse'
 *                 status:
 *                   type: string
 *                   example: success
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 */

/**
 * @swagger
 * /api/contact/{id}:
 *   put:
 *     summary: Update a contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Contact ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *        200:
 *          description: Contact updated successfully
 *          content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /api/contact/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Contact ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *        200:
 *          description: Contact deleted successfully
 *          content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *        404:
 *          $ref: '#/components/responses/NotFound'
 */
