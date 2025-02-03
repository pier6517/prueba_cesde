import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function show_alert(title, text, icon, id, url, confirmButtonText, cancelButtonText = 'Cancelar') {

    if (id) {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: true,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return fetch(url, {
                    method: 'DELETE'
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        );
                    });
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                if (result.value.success) {
                    Swal.fire(
                        'Eliminado',
                        'success'
                    );
                } else {
                    Swal.fire(
                        'Error',
                        'El registro no ha sido eliminado',
                        'error'
                    );
                }
            }
        });
    } else {
        switch (icon) {
            case 'warning':
                icon = 'warning';
                break;
            case 'error':
                icon = 'error';
                break;
            case 'success':
                icon = 'success';
                break;
            default:
                icon = 'info';
                break;
        }

        Swal.fire({
            position: 'text-end',
            title: title,
            text: text,
            icon: icon,
            timer: 1500,
            showConfirmButton: false
        });
    }
}