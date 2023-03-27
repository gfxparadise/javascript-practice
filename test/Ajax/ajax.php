<Script>
// Use to load data without refreashing data 
$(document).ready(functiom){
    $("#load-button").on("click",function(e){
       $.ajax({
            url : "ajax-load.php" ,
            type : "POST" ,
            success : function(data){
                $("#tabel-data").html(data);
            }
}) 
    })
}

// Way to insert data using ajax without refreashing data:

        // Wait for the document to finish loading before executing any code
        $(document).ready(function() {
            // Attach a submit event listener to the form with ID "myForm"
            $('#myForm').submit(function(event) {
                // Prevent the default form submission behavior
                event.preventDefault();

                // Serialize the form data into a string that can be sent to the server
                var formData = $(this).serialize();

                // Send an Ajax POST request to the server
                $.ajax({
                    type: 'POST',          // Use the POST HTTP method
                    url: 'insert.php',     // Send the request to "insert.php"
                    data: formData,        // Send the serialized form data
                    success: function(response) {
                        // Handle a successful response from the server
                        alert('Data inserted successfully!');
                    },
                    error: function(xhr, status, error) {
                        // Handle an error response from the server
                        alert('Error inserting data: ' + error);
                    }
                });
            });
        });

    // And this method 

        $(document).ready(function() {
            $('#myForm').submit(function(event) {
                event.preventDefault();

                // Create a new FormData object from the form
                var formData = new FormData(this);

                $.ajax({
                    type: 'POST',
                    url: 'insert.php',
                    data: formData,        // Send the FormData object directly
                    contentType: false,    // Set contentType to false to prevent jQuery from setting the "Content-Type" header
                    processData: false,    // Set processData to false to prevent jQuery from automatically processing the data
                    success: function(response) {
                        // Handle a successful response from the server
                        alert('Data inserted successfully!');
                    },
                    error: function(xhr, status, error) {
                        // Handle an error response from the server
                        alert('Error inserting data: ' + error);
                    }
                });
            });
        });


// Way to delete record:

    $(document).ready(function() {
        // Add click event listener to all delete buttons
        $('.delete-btn').click(function() {
            // Get the ID of the row to be deleted
            var id = $(this).data('id');

            // Create a new FormData object and append the ID to it
            var formData = new FormData();
            formData.append('id', id);

            // Send an AJAX request to delete the row
            $.ajax({
                url: 'delete.php',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    console.log(response);
                    // Remove the deleted row from the table
                    $('tr[data-id="' + id + '"]').remove();
                },
                error: function(xhr, status, error) {
                    console.error(error);
                }
            });
        });
    });


// Way to edit using ajax:
    // Without formdata method
        $(document).ready(function() {
            // Attach an event listener to the edit buttons
            $('#item-container').on('click', '.edit-button', function() {
                var $item = $(this).closest('.item');
                var itemId = $item.data('id');
                // Get the current name of the item
                var itemName = $item.find('.name').text();
                // Replace the item name with an input field
                $item.find('.name').html('<input type="text" value="' + itemName + '">');
                // Change the Edit button to a Save button
                $(this).text('Save').removeClass('edit-button').addClass('save-button');
            });
            
            // Attach an event listener to the save buttons
            $('#item-container').on('click', '.save-button', function() {
                var $item = $(this).closest('.item');
                var itemId = $item.data('id');
                // Get the new name of the item from the input field
                var newName = $item.find('input').val();
                // Make an AJAX request to update the item on the server
                updateItem(itemId, newName, function(success) {
                    if (success) {
                        // If the update was successful, replace the input field with the new item name
                        $item.find('.name').text(newName);
                        // Change the Save button back to an Edit button
                        $(this).text('Edit').removeClass('save-button').addClass('edit-button');
                    } else {
                        // If the update failed, display an error message to the user
                        alert('Update failed.');
                    }
                });
            });
        });

        function updateItem(itemId, newName, callback) {
            // Make an AJAX request to update the item on the server
            $.ajax({
                url: 'update_item.php',
                type: 'POST',
                data: { id: itemId, name: newName },
                success: function(data) {
                // If the server returns a success message, call the callback function with true
                if (data === 'success') {
                    callback(true);
                } else {
                    // If the server returns an error message, call the callback function with false
                    callback(false);
                }
                }
            });
        }

    // With formdata method
        function submitForm() {
            var form = document.getElementById('myForm');
            var formData = new FormData(form);
            
            // You can also add additional fields manually:
            formData.append('message', 'Hello, world!');

            // Use AJAX to submit the form data
            $.ajax({
                url: 'submit_form.php',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                console.log(response);
                },
                error: function(xhr, status, error) {
                console.error(error);
                }
            });
        }


// Live Search:

    $(document).ready(function() {
    // Attach an event listener to the search input field
        $('#search-input').on('input', function() {
            var query = $(this).val();
            // If the search query is not empty, make an AJAX request to the server
            if (query !== '') {
            // Call the search function with the search query as the parameter
            search(query);
            } else {
            // If the search query is empty, clear the search results
            clearResults();
            }
        });
    });

    function search(query) {
    // Make an AJAX request to the server
        $.ajax({
            url: 'search.php',
            type: 'POST',
            data: { query: query },
            success: function(data) {
            // If the server returns results, update the search results list
            if (data.length > 0) {
                updateResults(data);
            } else {
                // If the server returns no results, display a message to the user
                $('#search-results').html('<li>No results found.</li>');
            }
            }
        });
    }

    function updateResults(results) {
    // Clear the search results list
    $('#search-results').html('');
    // Loop through the results and add them to the search results list
        for (var i = 0; i < results.length; i++) {
            $('#search-results').append('<li>' + results[i] + '</li>');
        }
    }

    function clearResults() {
        // Clear the search results list
        $('#search-results').html('');
    }


// pagination:

        $(document).ready(function() {
            var currentPage = 1; // Initialize the current page to 1

            function loadResults(page) {
                $.ajax({
                url: 'load_results.php', // The URL of the PHP script that will return the search results
                type: 'POST', // Use the HTTP POST method to send the page number to the server
                data: { page: page }, // The page number to send to the server
                success: function(data) {
                    $('#results').html(data); // Update the search results container with the returned HTML
                    currentPage = page; // Set the current page to the page that was just loaded
                }
                });
            }

            loadResults(currentPage); // Load the initial search results for the first page

            // Set up an event listener for the "Previous" button
            $('#pagination').on('click', '.prev', function() {
                if (currentPage > 1) { // Make sure we're not already on the first page
                loadResults(currentPage - 1); // Load the previous page of search results
                }
            });

            // Set up an event listener for the "Next" button
            $('#pagination').on('click', '.next', function() {
                loadResults(currentPage + 1); // Load the next page of search results
            });
        });


// Loadmore pagination 

</Script>
