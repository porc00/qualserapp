// this is the id inside the modal template, this modal element is from materialize modal.
const MODAL_ID = '#modal';

//using this object to know where this functions come from
// consider using exports and making this a whole module
Modal = {};

Modal.openSelectModal = function(nodeElement, dataFunction) {
    let modalSelect = {};
    modalSelect.element = nodeElement instanceof jQuery ? nodeElement : $(nodeElement);
    modalSelect.selectedItems = [];

    if (modalSelect.element.val()) {
        modalSelect.element.val().split(',').forEach((item) => {
            modalSelect.selectedItems.push(item);
        });
    }

    Template.modal.helpers({
        isChecked: function() {
            if (modalSelect.selectedItems.includes(this.value))
                return "checked";
        }
    });

    var view = Blaze.renderWithData(Template.modal, dataFunction, $('#modal-container')[0]);
    $('#modal').openModal({
        complete: function() {
            modalSelect.element.val(modalSelect.selectedItems.join(','));
            Blaze.remove(view);
        }
    });

    $('#modal label').click((event) => {
        let inputId = $(event.currentTarget).attr('for');
        let newItemId = $('#' + inputId).val();

        if (modalSelect.selectedItems.includes(newItemId)) {
            modalSelect.selectedItems.pop(newItemId);
        } else {
            modalSelect.selectedItems.push(newItemId);
        }
    });

}
