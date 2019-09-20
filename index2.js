//Shopping list challenge

//Adding items to shopping list
$('#js-shopping-list-form').on('submit', function(e){

    let text = $('#shopping-list-entry').val();
    
    $('.shopping-list').append('<li><span class="shopping-item">' + text + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    e.preventDefault();
    });
    
    //Crossing items on/off from list
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
      });
    
    
    //Deleting items from shopping list
    $('.shopping-list').on('click', '.shopping-item-delete', function(e){
        $(this).closest('li').remove();
    });
    
    //second attempt to upload onto GitHub