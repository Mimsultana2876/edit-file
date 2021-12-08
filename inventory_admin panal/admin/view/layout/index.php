<!DOCTYPE html>
<html lang="en">
     <?php include 'header.php';?>
    <body>
            <?php include 'side_navber.php';?>
            <!-- Page content wrapper-->
            <div id="page-content-wrapper">
                <!-- Top navigation-->
              <?php include 'collapes_navber.php';?>
                <!-- Page content-->
                <form>
  <fieldset disabled>
    <legend></legend>
    <div class="mb-3">
      <label for="cat_type_name" class="form-label"> cat_type_name</label>
      <input type="text" id="cat_type_name" class="form-control" placeholder=" cat_type_name">
    </div>
    <div class="mb-3">
      <label for="cat_type_code" class="form-label">  cat_type_code</label>
      <select id="cat_type_code" class="form-select">
      
      </select>
    </div>
    <div class="mb-3">
      
    </div>
    <button type="button" class="btn btn-primary">Add catagore types</button>
  </fieldset>
</form> 
            </div>
        </div>
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
    </body>
</html>
