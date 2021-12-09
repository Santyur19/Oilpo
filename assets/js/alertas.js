
function borrar(){
    Swal.fire({
        title: '¿Está seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, bórralo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'Su archivo ha sido borrado.',
            'éxito'
          )
        }
      })
}

function editar(){
    Swal.fire({
        title: 'Editar usuario',
        html:
          '</br>'+
          '<label>Documneto</label>'+
          '</br>'+
          '<input id="swal-input1" class="swal2-input" readonly value="1234">' +
          '</br>'+
          '<label>Correo</label>'+
          '</br>'+
          '<input id="swal-input2" class="swal2-input" value="Santy@gmail.com	">'+
          '</br>'+
          '<label>Nombre</label>'+
          '</br>'+
          '<input id="swal-input2" class="swal2-input" value="Santiago">'+
          '</br>'+
          '<label>Apellido</label>'+
          '</br>'+
          '<input id="swal-input2" class="swal2-input" value="Uribe">'+
          '</br>'+
          '<label>Usuario</label>'+
          '</br>'+
          '<input id="swal-input2" class="swal2-input" value="Santyur">'+
          '</br>'+
          '<label>Rol</label>'+
          '</br>'+
          '<input id="swal-input2" class="swal2-input" value="Admin	">',
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      })
      
      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
}
function agregar_usu(){
    Swal.fire({
      title: 'Agregar Usuario',
      html:
        '</br>'+
        '<label>Documneto</label>'+
        '</br>'+
        '<input id="swal-input1" class="swal2-input"  value="">' +
        '</br>'+
        '<label>Correo</label>'+
        '</br>'+
        '<input id="swal-input2" class="swal2-input">'+
        '</br>'+
        '<label>Nombre</label>'+
        '</br>'+
        '<input id="swal-input2" class="swal2-input">'+
        '</br>'+
        '<label>Apellido</label>'+
        '</br>'+
        '<input id="swal-input2" class="swal2-input">'+
        '</br>'+
        '<label>Usuario</label>'+
        '</br>'+
        '<input id="swal-input2" class="swal2-input">'+
        '</br>'+
        '<label>Rol</label>'+
        '</br>'+
        '<input id="swal-input2" class="swal2-input">',
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })
    
    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }

  }

  function agregar_rol(){

    Swal.fire({
      title: 'Agregar Rol',
      html:
        '</br>'+
        '<label>Nombre del rol</label>'+
        '<input id="swal-input2" class="swal2-input"> '+
        '</br>'+
        '<label>Proceso</label>'+
        '<select class="swal2-input"><option>...</option><option>Admin</option><option>Empleado</option></select>'+
        '</br>'+
        '<label>Permiso</label>'+
        '<select class="swal2-input"><option>...</option><option>Admin</option><option>Empleado</option></select>',

      focusConfirm: false,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })
    
    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }

 }
function editar_rol(){
  Swal.fire({
    title: 'Editar Rol',
    html:
      '</br>'+
      '<label>Nombre del rol</label>'+
      '</br>'+
      '<label>Permiso</label>'+
      '<select class="swal2-input"><option>Editar</option></select>'+
      ''+
      '',
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }


}
function agregar_producto(){
  Swal.fire({
    title: 'Agregar Producto',
    html:
      '</br>'+
      '<label>Codigo</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">' +
      '</br>'+
      '<label>Nombre</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">'+
      '</br>'+
      '<label>Valor</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">'+
      '</br>'+
      '<label>Cantidad</label>'+
      '</br>'+
      '<label>Categoría</label>'+
      '<select class="swal2-input" ><option>Seleccione</option></select>'+
      '</br>'+
      '<label>Estado</label>'+
      '&nbsp;&nbsp;&nbsp;&nbsp;<select class="swal2-input" ><option>Seleccione</option></select>',
      
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}
function editar_producto(){
  Swal.fire({
    title: 'Editar usuario',
    html:
      '</br>'+
      '<label>Codigo</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input" readonly value="123">' +
      '</br>'+
      '<label>Nombre</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input" value="Tornillo">'+
      '</br>'+
      '<label>Valor</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input" value="$ 200">'+
      '</br>'+
      '<label>Cantidad</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input" value="50">'+
      '</br>'+
      '<label>Categoría</label>'+
      '<select class="swal2-input" ><option>Seleccione</option></select>'+
      '</br>'+
      '<label>Estado</label>'+
      '&nbsp;&nbsp;&nbsp;&nbsp;<select class="swal2-input" ><option>Seleccione</option></select>',
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}

function agregar_servicio(){
  Swal.fire({
    title: 'Agregar Servicio',
    html:
      '</br>'+
      '<label>Nombre</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">' +
      '</br>'+
      '<label>Valor</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">',
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}
function editar_servicio(){
  Swal.fire({
    title: 'Editar servicio',
    html:
      '</br>'+
      '<label>Nombre</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="Polichado">' +
      '</br>'+
      '<label>Valor</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="$ 20000">',
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }
  

}
function agregar_proveedor(){
  Swal.fire({
    title: 'Agregar Proveedor',
    html:
      '</br>'+
      '<label>Documento</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">' +
      '</br>'+
      '<label>Tipo de documento</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">'+
      '</br>'+
      '<label>Nombre</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">'+
      '</br>'+
      '<label>Telefono</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">'+
      '</br>'+
      '<label>Ciudad</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">'+
      '</br>'+
      '<label>Dirección</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">',
      
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}

function editar_proveedor(){
  Swal.fire({
    title: 'Editar Proveedor',
    html:
      '</br>'+
      '<label>Documento</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="123">' +
      '</br>'+
      '<label>Tipo de documento</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input " value="NIT">'+
      '</br>'+
      '<label>Nombre</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input" value="Yamaha">'+
      '</br>'+
      '<label>Telefono</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input" value="351231141">'+
      '</br>'+
      '<label>Ciudad</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input" value="Bogotá">'+
      '</br>'+
      '<label>Dirección</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input" value="CL 51 # 24 -56">',
      
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}
function agregar_cliente(){
  Swal.fire({
    title: 'Agregar Cliente',
    html:
      '</br>'+
      '<label>Documento</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">' +
      '</br>'+
      '<label>Tipo de documento</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">'+
      '</br>'+
      '<label>Nombre</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">'+
      '</br>'+
      '<label>Apellido</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">'+
      '</br>'+
      '<label>Telefono</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">'+
      '</br>'+
      '<label>Dirección</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input">',
      
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}
function editar_cliente(){
  Swal.fire({
    title: 'Editar Cliente',
    html:
      '</br>'+
      '<label>Documento</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="123">' +
      '</br>'+
      '<label>Nombre</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input" value="Santiago">'+
      '</br>'+
      '<label>Apellido</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input" value="Uribe">'+
      '</br>'+
      '<label>Telefono</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input" value="3137445577">'+
      '</br>'+
      '<label>Dirección</label>'+
      '</br>'+
      '<input id="swal-input2" class="swal2-input" value="Cra 71A#96-108">',
      
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }
  

}
function agregar_cliente_venta(){
  Swal.fire({
    title: 'Agregar cliente venta',
    html:
      '</br>'+
      '<label>Documento</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">',
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }


}
function agregar_servicio(){
  Swal.fire({
    title: 'Agregar servicio',
    html:
      '</br>'+
      '<label>Nombre</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">',
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}
function agregar_producto_venta(){
  Swal.fire({
    title: 'Agregar Producto venta',
    html:
      '</br>'+
      '<label>Nombre</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">'+
      '</br>'+
      '<label>Cantidad</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">',
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}
function agregar_cliente(){
  Swal.fire({
    title: 'Agregar cliente a la venta',
    html:
      '</br>'+
      '<label>Ingrese el documento</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">'+
      '</br>',
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }


}
function agregar_compra_producto(){
  Swal.fire({
    title: 'Agregar ',
    html:
      '</br>'+
      '<label>Nombre</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">'+
      '</br>'+
      '<label>Precio</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">'+
      '</br>'+
      '<label>Cantidad</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">'+
      '</br>'+
      '<label>Iva</label>'+
      '</br>'+
      '<input id="swal-input1" class="swal2-input"  value="">'+
      '</br>',
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}