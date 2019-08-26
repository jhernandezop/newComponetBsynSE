import React, { Component } from 'react';
import {Form} from 'react-formio';
import './AreaEdicion.css';
import moment from 'moment';

/*import  {formularioprueba}  from './formularios/Prueba.json';
import { agendamiento } from './formularios/Tipificacion_Agendamiento.json';
import { seguimiento } from './formularios/Tipificacion_casos_en_seguimiento.json';

*/

class AreaEdicion extends Component {

  constructor(props) {
    super(props);
    this.state = {  
       ficha_S2_id:"",
       ficha_C_T_id:"",
       ficha_nro_gestion:"",
       ficha_estado:"",
       expandida: false,
       formulario:"detalleLLamada",
       detalleLLamada:detalleLLamada

     }

     this.ocultarfomrulario=this.ocultarfomrulario.bind(this)
     this.mostrarfomrulario=this.mostrarfomrulario.bind(this)
     
     
  }

  actualizarformularios(nuevoFormulario){
    
    console.log(nuevoFormulario.formulario[0])
      this.setState({caso_ES:nuevoFormulario.formulario[0].caso_ES});
      //ACTUALIZO ESTADO DEL AREA DE EDICION
       this.setState({ficha_S2_id:nuevoFormulario.formulario[0].ficha.caso_ES});
       this.setState({ficha_C_T_id:nuevoFormulario.formulario[0].ficha.caso_CAM});
       this.setState({ficha_nro_gestion:nuevoFormulario.formulario[0].ficha.nro_gestion});
       if(nuevoFormulario.formulario[0].ficha.estado_proceso=="nuevo"){
            this.setState({ficha_estado:"nuevo"});
        }else if(nuevoFormulario.formulario[0].ficha.estado_proceso=="en gestion"){
            this.setState({ficha_estado:"en_gestion"});
        }else if(nuevoFormulario.formulario[0].ficha.estado_proceso=="por entregar"){
            this.setState({ficha_estado:"por entregar"});
        }else if(nuevoFormulario.formulario[0].ficha.estado_proceso=="en devolucion"){
            this.setState({ficha_estado:"en devolucion"});
        }
       

      
      this.setState({formulario:""});
      this.setState({formulario:"detalleLLamada"});
      
      const f=nuevoFormulario.formulario[0].datosFormulario
      const newForm=detalleLLamada 
      /*
      //PESTAÑA INFO CLIENTE = detalleLLamada.components[0].components[0]
      newForm.components[0].components[0].components[0].columns[0].components[0].defaultValue=f.doc_nu_documento
      newForm.components[0].components[0].components[0].columns[0].components[1].defaultValue=f.doc_nombre+" "+f.Ap_paterno+" "+f.doc_Ap_materno
      newForm.components[0].components[0].components[0].columns[0].components[2].defaultValue=f.doc_nu_telefono

      newForm.components[0].components[0].components[0].columns[1].components[0].defaultValue=f.doc_nucotizacion
      newForm.components[0].components[0].components[0].columns[1].components[1].defaultValue=f.doc_version
      newForm.components[0].components[0].components[0].columns[1].components[2].defaultValue=f.doc_lugaratencion

      newForm.components[0].components[0].components[1].columns[0].components[0].defaultValue=f.doc_no_correo
      newForm.components[0].components[0].components[1].columns[1].components[0].defaultValue=f.doc_Comuna
      newForm.components[0].components[0].components[1].columns[2].components[0].defaultValue=f.doc_no_direccion
      //PESTAÑA INFORMACION COMPLEMENTARIA = newForm.components[0].components[1] 
      //VEHICULO EN PARTE DE PAGO
      newForm.components[0].components[1].components[0].components[0].columns[0].components[0].defaultValue=f.doc_Retoma_no_patente
      newForm.components[0].components[1].components[0].components[0].columns[0].components[1].defaultValue=f.doc_Retoma_no_version
      newForm.components[0].components[1].components[0].components[0].columns[1].components[0].defaultValue=f.doc_Retoma_no_modelo
      newForm.components[0].components[1].components[0].components[0].columns[1].components[1].defaultValue=f.doc_Retoma_nu_anio
      newForm.components[0].components[1].components[0].components[0].columns[2].components[0].defaultValue=f.doc_Retoma_no_marca
      newForm.components[0].components[1].components[0].components[0].columns[2].components[1].defaultValue=f.doc_Retoma_ValorRetoma
      //CREDITO
      newForm.components[0].components[1].components[1].components[0].columns[0].components[0].defaultValue=f.doc_Credito_Tipo
      newForm.components[0].components[1].components[1].components[0].columns[0].components[1].defaultValue=f.doc_Credito_TotalaFinanciar
      newForm.components[0].components[1].components[1].components[0].columns[0].components[2].defaultValue=f.doc_Credito_Saldo
      newForm.components[0].components[1].components[1].components[0].columns[1].components[0].defaultValue=f.doc_Credito_MontoPie
      newForm.components[0].components[1].components[1].components[0].columns[1].components[1].defaultValue=f.doc_Credito_ValorCuota
      newForm.components[0].components[1].components[1].components[0].columns[1].components[2].defaultValue=f.doc_Credito_CAE
      newForm.components[0].components[1].components[1].components[0].columns[2].components[0].defaultValue=f.doc_Credito_Cuotas
      newForm.components[0].components[1].components[1].components[0].columns[2].components[1].defaultValue=f.doc_Credito_CostoTotal
      //SEURO
      newForm.components[0].components[1].components[2].components[0].columns[0].components[0].defaultValue=f.doc_Seguro_Deducible
      newForm.components[0].components[1].components[2].components[0].columns[1].components[0].defaultValue=f.doc_Seguro_PrimaAnual
      newForm.components[0].components[1].components[2].components[0].columns[2].components[0].defaultValue=f.doc_Seguro_PrimaMensual
      //PESTAÑA HISTORICO = detalleLLamada.components[0].components[2] 
      //VEHICULO EN PARTE DE PAGO*/
      /*detalleLLamada.components[0].components[2].components[0].components[0].columns[0].components[0].defaultValue=f.nucotizacion
      detalleLLamada.components[0].components[2].components[0].components[0].columns[0].components[1].defaultValue=f.Retoma_no_version
      detalleLLamada.components[0].components[2].components[0].components[0].columns[1].components[0].defaultValue=f.Retoma_no_modelo
      detalleLLamada.components[0].components[2].components[0].components[0].columns[1].components[1].defaultValue=f.Retoma_nu_anio
      detalleLLamada.components[0].components[2].components[0].components[0].columns[2].components[0].defaultValue=f.Retoma_no_marca
      detalleLLamada.components[0].components[2].components[0].components[0].columns[2].components[1].defaultValue=f.Retoma_ValorRetoma*/
      
      const ejecutivos = [];
      const los_ejecitivos=this.props.ejecutivos
      //console.log(los_ejecitivos)
      los_ejecitivos.forEach(function(element) {
        
        ejecutivos.push({
                                    "label": element.ConsultorVentas,
                                    "value": element.RUT
        })  

      }); 

      //RESULTADO DE LA LLAMADA
     // seguimiento.components[0].components[2].columns[0].components[0].data.values=ejecutivos
      //console.log(seguimiento.components[0].components[2].columns[0].components[0].data.values)
      
      this.state.detalleLLamada=newForm
      console.log(this.state)
      this.mostrarfomrulario()
      console.log(this.state)

      //this.setState({expandida:true});


  }


  componentWillReceiveProps(nextProps){
    console.log(nextProps)
     this.ocultarfomrulario()
     
     
    //console.log(nextProps.formulario.length)
    if(nextProps.formulario.length>0){
      
      this.actualizarformularios(nextProps); 

    }
    
   
  }

  verFomrularioTipificacion(text) {
    console.log(this.state.ficha_estado)
    console.log(text)
    if(text=="tipificacion"){
        
        if(this.state.ficha_estado=="nuevo" || this.state.ficha_estado=="en gestion" || this.state.ficha_estado=="en_gestion"){
            this.setState({formulario:"tipificacionCasoSeguimiento"});
        }else if(this.state.ficha_estado=="por entregar"){
            this.setState({formulario:"tipificacionEntrega"});
        }else if(this.state.ficha_estado=="en devolucion"){
            this.setState({formulario:"tipificacionDevolucion"});
        }

    }else if(text=="detalleLLamada"){
        this.setState({formulario:"detalleLLamada"});

    }
  }

  

  enviargestion = (event) => {

    document.getElementById("submit").setAttribute("disabled","disabled");

    console.log(event)

     //const fecha_seguimiento="";
     //const fechas_seguimiento="";
    if(event.data.select=="agendamiento_tercero"){



        console.log(event.data.fechaDeAgendamiento)
        const los_ejecitivos=this.props.ejecutivos 
        const datos_ejecutivo = []
        los_ejecitivos.forEach(function(element) {
            if(element.RUT==event.data.ejecutivoDePiso){
                //console.log(rut, element.Sucursal) 
                datos_ejecutivo.push(element.Sucursal, element.COMUNA, element.CIUDAD)
                
            }
        })
       
        console.log(datos_ejecutivo)
        //const fechas_seguimiento=event.data.fechaDeAgendamiento
        //const fechas_seguimiento=fecha_seguimiento.split("T",2)
        this.props.formulario[0].datosFormulario["fecha_seguimiento"]=""
        this.props.formulario[0].datosFormulario["hora_seguimiento"]=""
        this.props.formulario[0].datosFormulario["tipo_seguimiento"]=""
        this.props.formulario[0].datosFormulario["comentario_piso"]=event.data.comentarioAEjecutivo
        this.props.formulario[0].datosFormulario["comentario_gestion"]=event.data.comentarios
        this.props.formulario[0].datosFormulario["sucursal_agenda"]=datos_ejecutivo[0]
        this.props.formulario[0].datosFormulario["ciudad_agenda"]=datos_ejecutivo[2]
        this.props.formulario[0].datosFormulario["comuna_agenda"]=datos_ejecutivo[1]
        this.props.formulario[0].datosFormulario["fecha_agenda"]=event.data.fechaDeAgendamiento.slice(0, 10)
        this.props.formulario[0].datosFormulario["hora_agenda"]=event.data.fechaDeAgendamiento.slice(11, 18)
        this.props.formulario[0].datosFormulario["rut_asesor_comercial"]=event.data.ejecutivoDePiso
        this.props.formulario[0].datosFormulario["puntodeventa"]=event.data.ejecutivoDePiso
    }else{

        /*this.props.formulario[0].datosFormulario["fecha_seguimiento"]=""
        this.props.formulario[0].datosFormulario["hora_seguimiento"]=""
        this.props.formulario[0].datosFormulario["tipo_seguimiento"]=""
        this.props.formulario[0].datosFormulario["comentario_piso"]=""
        this.props.formulario[0].datosFormulario["comentario_gestion"]=""
        this.props.formulario[0].datosFormulario["sucursal_agenda"]=""
        this.props.formulario[0].datosFormulario["ciudad_agenda"]=""
        this.props.formulario[0].datosFormulario["comuna_agenda"]=""
        this.props.formulario[0].datosFormulario["fecha_agenda"]=""
        this.props.formulario[0].datosFormulario["hora_agenda"]=""
        this.props.formulario[0].datosFormulario["rut_asesor_comercial"]=""
        this.props.formulario[0].datosFormulario["puntodeventa"]=""*/

    }
       
    this.props.formulario[0].datosFormulario["comentario_sv"]=event.data.comentarios
    this.props.formulario[0].datosFormulario["resultado_llamada"]=event.data.select

    const transaccion={
                        "tx":"gesSV",
                        "ts_o":moment().format('YYYY-MM-DDTHH:mm:ss'),
                        "tx_user":this.props.anexo,
                        "destino":"test",
                        "tx_version" : "0.3",
                        "origen":"face",
                        "caso": {
                            "nro_gestion": this.state.ficha_nro_gestion,
                            "S2_id":this.state.ficha_S2_id,
                            "resultado_llamada": event.data.select,
                            "casoCAM":this.state.ficha_C_T_id,
                            "user":this.props.anexo,
                            "tipo":"",
                            "padre":"0",
                            "campania":"",
                            "estado":this.state.ficha_estado,
                            "comentario_sv":event.data.comentarios,
                        },
                        "gestion":{},
                        "gestion_data":this.props.formulario[0].datosFormulario
                        }

                    console.log(transaccion)

          var url = 'https://bscore.openpartner.cl/gdm';
         
            fetch(url, {
              method: 'POST', 
              body: JSON.stringify(transaccion), 
              headers:{
              'Content-Type': 'text/plain'
              }
            })
            .then(res => res.json())
            .then(response => {if(response){
                            console.log(response);
                             this.props.pedirFichas()
                             this.props.desplegarEdicion("limpiar","","")
                              this.setState({expandida:false});

                            }})
            .catch(error => console.error('Error:', error));
        

    
  }

  actualizar = (event) => {

    console.log(this.state)
    console.log(event.data)
    const actualizar=event.data
    this.setState({expandida:false});
    

  }
 
ocultarfomrulario() {


    

    this.setState({expandida:false});
    
  }

mostrarfomrulario() {
    
    this.setState({expandida:true});
  }
 
/*<div key={key} className="form-group">
          <label for={"exampleInputEmail1"+key}>{key}</label>
          <input type={key} value={formulario[key]} className="form-control" id={"Input"+key} aria-describedby={key} placeholder={"Enter"+key} />
        </div>*/
  render(){

    //const detalle = <Form form={this.state.detalleLLamada} onSubmit={this.actualizar} />
    
    

/*{formulario}*/
    if(this.state.expandida==true ){

           
       
            return (

              <div id="contenedorFormularios"  className='row contenedorFormularios'>
                
                {this.state.formulario=="detalleLLamada" && <Form form={this.state.detalleLLamada} onSubmit={this.actualizar} />}
                {this.state.formulario=="tipificacionCasoSeguimiento" && <Form form={tipificacionCasoSeguimiento} onSubmit={this.enviargestion} />}
                {this.state.formulario=="tipificacionEntrega" && <Form form={tipificacionEntrega} onSubmit={this.enviargestion} />}
                {this.state.formulario=="tipificacionDevolucion" && <Form form={tipificacionDevolucion} onSubmit={this.enviargestion} />}

                <div className="btn-group"  role="group" aria-label="Basic example">
                  <button type="button" onClick={() => this.verFomrularioTipificacion("detalleLLamada")} className="btn btn-secondary">Detalle</button>
                  <button type="button" onClick={() => this.verFomrularioTipificacion("tipificacion")} className="btn btn-secondary">Tipificar</button>
                </div>
                
                
              </div> 
             
          ); 
        
    }else{
      return ( 
          <div className='row contenedorFormularios'></div> 
         
      ); 
    }
      
  }
}



export default AreaEdicion;

const detalleLLamada={
    "display": "form",
    "components": [
        {
            "label": "Tabs",
            "components": [
                {
                    "label": "Vehículo",
                    "key": "tab2",
                    "components": [
                        {
                            "label": "Columns",
                            "columns": [
                                {
                                    "components": [
                                        {
                                            "label": "Categoría",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "categoria",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e0f41f"
                                        },
                                        {
                                            "label": "Puerta ",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "puerta",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e518dji"
                                        },
                                        {
                                            "label": "Maletas",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "maletas",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "eufcl8p"
                                        },
                                        {
                                            "label": "Multimedia",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "multimedia",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "er7uyjj"
                                        },
                                        {
                                            "label": "Mecánica ",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "mecanica",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "ee1z6bv"
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column",
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": true,
                                    "hidden": false,
                                    "clearOnHide": true,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "conditional": {
                                        "show": null,
                                        "when": null,
                                        "eq": ""
                                    },
                                    "id": "eg7sqmb"
                                },
                                {
                                    "components": [
                                        {
                                            "label": "Modelo ",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "modelo",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e5jm21j"
                                        },
                                        {
                                            "label": "Pasajeros",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "pasajeros",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e828bzf"
                                        },
                                        {
                                            "label": "Control",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "control",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "es6gune"
                                        },
                                        {
                                            "label": "Rendimiento ",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "rendimiento",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "eydl23a"
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column",
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": true,
                                    "hidden": false,
                                    "clearOnHide": true,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "conditional": {
                                        "show": null,
                                        "when": null,
                                        "eq": ""
                                    },
                                    "id": "e3gc21u"
                                },
                                {
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column",
                                    "components": [],
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": true,
                                    "hidden": false,
                                    "clearOnHide": true,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "conditional": {
                                        "show": null,
                                        "when": null,
                                        "eq": ""
                                    },
                                    "id": "ehblo6n"
                                }
                            ],
                            "mask": false,
                            "tableView": false,
                            "alwaysEnabled": false,
                            "type": "columns",
                            "input": false,
                            "key": "columns2",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": "",
                                "eq": ""
                            },
                            "tab": 0,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "attributes": {},
                            "placeholder": "",
                            "prefix": "",
                            "customClass": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": null,
                            "protected": false,
                            "unique": false,
                            "persistent": false,
                            "hidden": false,
                            "clearOnHide": false,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "labelWidth": 30,
                            "labelMargin": 3,
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "tabindex": "",
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "allowCalculateOverride": false,
                            "widget": null,
                            "refreshOn": "",
                            "clearOnRefresh": false,
                            "validateOn": "change",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false
                            },
                            "autoAdjust": false,
                            "hideOnChildrenHidden": false,
                            "id": "eod657"
                        }
                    ]
                },
                {
                    "label": "Período",
                    "key": "periodo",
                    "components": [
                        {
                            "label": "Field Set",
                            "legend": "Entrega",
                            "mask": false,
                            "tableView": true,
                            "alwaysEnabled": false,
                            "type": "fieldset",
                            "input": false,
                            "key": "fieldSet2",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": "",
                                "eq": ""
                            },
                            "components": [
                                {
                                    "label": "Columns",
                                    "columns": [
                                        {
                                            "components": [
                                                {
                                                    "label": "Desde",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "desde",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "ew1i2w5"
                                                }
                                            ],
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "ejcqpmu"
                                        },
                                        {
                                            "components": [
                                                {
                                                    "label": "Lugar",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "lugar",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "ewrw5vg"
                                                }
                                            ],
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "e0hap2j"
                                        },
                                        {
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "width": 4,
                                            "components": [
                                                {
                                                    "label": "Hora",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "hora",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "evrwkzd"
                                                }
                                            ],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "ei90jn"
                                        }
                                    ],
                                    "mask": false,
                                    "tableView": false,
                                    "alwaysEnabled": false,
                                    "type": "columns",
                                    "input": false,
                                    "key": "columns",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": "",
                                        "eq": ""
                                    },
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "reorder": false,
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": false,
                                    "hidden": false,
                                    "clearOnHide": false,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "autoAdjust": false,
                                    "hideOnChildrenHidden": false,
                                    "id": "e1eyxtc"
                                }
                            ],
                            "tab": 1,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "attributes": {},
                            "placeholder": "",
                            "prefix": "",
                            "customClass": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": null,
                            "protected": false,
                            "unique": false,
                            "persistent": false,
                            "hidden": false,
                            "clearOnHide": true,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "labelWidth": 30,
                            "labelMargin": 3,
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "tabindex": "",
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "allowCalculateOverride": false,
                            "widget": null,
                            "refreshOn": "",
                            "clearOnRefresh": false,
                            "validateOn": "change",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false
                            },
                            "id": "e9dnnjud"
                        },
                        {
                            "label": "Field Set",
                            "legend": "Devolución",
                            "mask": false,
                            "tableView": true,
                            "alwaysEnabled": false,
                            "type": "fieldset",
                            "input": false,
                            "key": "fieldSet3",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": "",
                                "eq": ""
                            },
                            "components": [
                                {
                                    "label": "Columns",
                                    "columns": [
                                        {
                                            "components": [
                                                {
                                                    "label": "Desde",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "desde2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "e5byssb"
                                                }
                                            ],
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "exhhkw"
                                        },
                                        {
                                            "components": [
                                                {
                                                    "label": "Lugar",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "lugar2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "ev8oac"
                                                }
                                            ],
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "ea9thkg"
                                        },
                                        {
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "width": 4,
                                            "components": [
                                                {
                                                    "label": "Hora",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "hora2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "eqhl3dm"
                                                }
                                            ],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "ekvbcob"
                                        }
                                    ],
                                    "mask": false,
                                    "tableView": false,
                                    "alwaysEnabled": false,
                                    "type": "columns",
                                    "input": false,
                                    "key": "columns3",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": "",
                                        "eq": ""
                                    },
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "reorder": false,
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": false,
                                    "hidden": false,
                                    "clearOnHide": false,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "autoAdjust": false,
                                    "hideOnChildrenHidden": false,
                                    "id": "e4b94b"
                                }
                            ],
                            "tab": 1,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "attributes": {},
                            "reorder": false,
                            "placeholder": "",
                            "prefix": "",
                            "customClass": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": null,
                            "protected": false,
                            "unique": false,
                            "persistent": false,
                            "hidden": false,
                            "clearOnHide": true,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "labelWidth": 30,
                            "labelMargin": 3,
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "tabindex": "",
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "allowCalculateOverride": false,
                            "widget": null,
                            "refreshOn": "",
                            "clearOnRefresh": false,
                            "validateOn": "change",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false
                            },
                            "id": "elmumnh"
                        }
                    ]
                },
                {
                    "label": "Cotización",
                    "key": "cotizacion",
                    "components": [
                        {
                            "label": "Panel",
                            "title": "Descripción",
                            "collapsible": false,
                            "mask": false,
                            "tableView": false,
                            "alwaysEnabled": false,
                            "type": "panel",
                            "input": false,
                            "key": "panel2",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": ""
                            },
                            "components": [
                                {
                                    "label": "Columns",
                                    "columns": [
                                        {
                                            "components": [
                                                {
                                                    "label": "Auto",
                                                    "mask": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "select",
                                                    "input": true,
                                                    "key": "auto2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "select": false,
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "data": {
                                                        "values": [
                                                            {
                                                                "label": "",
                                                                "value": ""
                                                            }
                                                        ]
                                                    },
                                                    "valueProperty": "value",
                                                    "reorder": false,
                                                    "lazyLoad": false,
                                                    "selectValues": "",
                                                    "disableLimit": false,
                                                    "sort": "",
                                                    "reference": false,
                                                    "selectThreshold": 0.3,
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {}
                                                },
                                                {
                                                    "label": "Adicional",
                                                    "mask": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "select",
                                                    "input": true,
                                                    "key": "auto3",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "select": false,
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "data": {
                                                        "values": [
                                                            {
                                                                "label": "",
                                                                "value": ""
                                                            }
                                                        ]
                                                    },
                                                    "valueProperty": "value",
                                                    "lazyLoad": false,
                                                    "selectValues": "",
                                                    "disableLimit": false,
                                                    "sort": "",
                                                    "reference": false,
                                                    "selectThreshold": 0.3,
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "reorder": false
                                                }
                                            ],
                                            "width": 6,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column"
                                        },
                                        {
                                            "components": [
                                                {
                                                    "label": "Cantidad",
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "cantidad",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {}
                                                },
                                                {
                                                    "label": "Cantidad",
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "cantidad2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {}
                                                }
                                            ],
                                            "width": 3,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column"
                                        },
                                        {
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "width": 3,
                                            "components": [
                                                {
                                                    "label": "Monto",
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "monto",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {}
                                                },
                                                {
                                                    "label": "Monto",
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "monto2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {}
                                                },
                                                {
                                                    "label": "Panel",
                                                    "title": "Total con IVA incluído.",
                                                    "collapsible": false,
                                                    "mask": false,
                                                    "tableView": false,
                                                    "alwaysEnabled": false,
                                                    "type": "panel",
                                                    "input": false,
                                                    "key": "panel",
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "components": [
                                                        {
                                                            "label": "Number",
                                                            "hideLabel": true,
                                                            "mask": false,
                                                            "tableView": true,
                                                            "alwaysEnabled": false,
                                                            "type": "number",
                                                            "input": true,
                                                            "key": "number",
                                                            "validate": {
                                                                "customMessage": "",
                                                                "json": ""
                                                            },
                                                            "conditional": {
                                                                "show": "",
                                                                "when": "",
                                                                "json": ""
                                                            },
                                                            "reorder": false,
                                                            "delimiter": false,
                                                            "requireDecimal": false,
                                                            "encrypted": false,
                                                            "properties": {},
                                                            "customConditional": "",
                                                            "logic": [],
                                                            "attributes": {}
                                                        }
                                                    ],
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "collapsed": false,
                                                    "reorder": false
                                                }
                                            ]
                                        }
                                    ],
                                    "mask": false,
                                    "tableView": false,
                                    "alwaysEnabled": false,
                                    "type": "columns",
                                    "input": false,
                                    "key": "columns4",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "reorder": false
                                }
                            ],
                            "tab": 2,
                            "collapsed": false,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "attributes": {}
                        }
                    ]
                },
                {
                    "label": "Datos Garantía",
                    "key": "datosGarantia",
                    "components": [
                        {
                            "label": "Columns",
                            "columns": [
                                {
                                    "components": [
                                        {
                                            "label": "Nombre y Apellido",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "nombreYApellido",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e8xyhms"
                                        },
                                        {
                                            "label": "Rut/Pasaporte",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "rutPasaporte",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "ejz6qfr"
                                        },
                                        {
                                            "label": "País",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "pais",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "erw1yhi"
                                        },
                                        {
                                            "label": "Teléfono",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "telefono",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "el819j9"
                                        },
                                        {
                                            "label": "Dirección",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "direccion",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "edqahqe"
                                        },
                                        {
                                            "label": "E-mail",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "eMail",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e05wox"
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column",
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": true,
                                    "hidden": false,
                                    "clearOnHide": true,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "conditional": {
                                        "show": null,
                                        "when": null,
                                        "eq": ""
                                    },
                                    "id": "esn9ifc"
                                },
                                {
                                    "components": [
                                        {
                                            "label": "Licencia",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "licencia",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e9ebvd"
                                        },
                                        {
                                            "label": "Vence",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "vence",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e90ye6t"
                                        },
                                        {
                                            "label": "N° TDC",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "nTdc",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "errlxv"
                                        },
                                        {
                                            "label": "Tarjeta ",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "tarjeta",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "ea94med"
                                        },
                                        {
                                            "label": "Vence",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "vence2",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e1u34pa"
                                        },
                                        {
                                            "label": "Observaciones",
                                            "autoExpand": false,
                                            "isUploadEnabled": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textarea",
                                            "input": true,
                                            "key": "observaciones",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "rows": 2,
                                            "uploadUrl": "",
                                            "uploadOptions": "",
                                            "uploadDir": "",
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": {
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "wysiwyg": false,
                                            "editor": "",
                                            "id": "ewkjo99"
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column",
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": true,
                                    "hidden": false,
                                    "clearOnHide": true,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "conditional": {
                                        "show": null,
                                        "when": null,
                                        "eq": ""
                                    },
                                    "id": "ezw6193"
                                }
                            ],
                            "mask": false,
                            "tableView": false,
                            "alwaysEnabled": false,
                            "type": "columns",
                            "input": false,
                            "key": "columns5",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": "",
                                "eq": ""
                            },
                            "tab": 3,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "attributes": {},
                            "placeholder": "",
                            "prefix": "",
                            "customClass": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": null,
                            "protected": false,
                            "unique": false,
                            "persistent": false,
                            "hidden": false,
                            "clearOnHide": false,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "labelWidth": 30,
                            "labelMargin": 3,
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "tabindex": "",
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "allowCalculateOverride": false,
                            "widget": null,
                            "refreshOn": "",
                            "clearOnRefresh": false,
                            "validateOn": "change",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false
                            },
                            "autoAdjust": false,
                            "hideOnChildrenHidden": false,
                            "id": "e2u3d4"
                        },
                        {
                            "label": "Field Set",
                            "legend": "Datos Conductor Adicional",
                            "mask": false,
                            "tableView": true,
                            "alwaysEnabled": false,
                            "type": "fieldset",
                            "input": false,
                            "key": "fieldSet4",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": "",
                                "eq": ""
                            },
                            "components": [
                                {
                                    "label": "Columns",
                                    "columns": [
                                        {
                                            "components": [
                                                {
                                                    "label": "Nombre y Apellido",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "nombreYApellido2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "eopydi"
                                                },
                                                {
                                                    "label": "Rut/ Pasaporte",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "rutPasaporte2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "exememc"
                                                },
                                                {
                                                    "label": "Teléfono",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "telefono2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "egu7qc8"
                                                }
                                            ],
                                            "width": 6,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "efsiau"
                                        },
                                        {
                                            "components": [
                                                {
                                                    "label": "Licencia",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "licencia2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "eatumfa"
                                                },
                                                {
                                                    "label": "Vence",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "vence3",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "eunvmho"
                                                }
                                            ],
                                            "width": 6,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "eks3az"
                                        }
                                    ],
                                    "mask": false,
                                    "tableView": false,
                                    "alwaysEnabled": false,
                                    "type": "columns",
                                    "input": false,
                                    "key": "columns6",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": "",
                                        "eq": ""
                                    },
                                    "reorder": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": false,
                                    "hidden": false,
                                    "clearOnHide": false,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "autoAdjust": false,
                                    "hideOnChildrenHidden": false,
                                    "id": "ezmeizf"
                                }
                            ],
                            "tab": 3,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "attributes": {},
                            "placeholder": "",
                            "prefix": "",
                            "customClass": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": null,
                            "protected": false,
                            "unique": false,
                            "persistent": false,
                            "hidden": false,
                            "clearOnHide": true,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "labelWidth": 30,
                            "labelMargin": 3,
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "tabindex": "",
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "allowCalculateOverride": false,
                            "widget": null,
                            "refreshOn": "",
                            "clearOnRefresh": false,
                            "validateOn": "change",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false
                            },
                            "id": "ecf9enw"
                        }
                    ]
                }
            ],
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "tabs",
            "input": false,
            "key": "tabs2",
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "reorder": false,
            "properties": {},
            "customConditional": "",
            "logic": [],
            "attributes": {}
        },
        {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "input": true,
            "tableView": true
        }
    ],
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    }
}
const tipificacionCasoSeguimiento={
    "display": "form",
    "components": [
        {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "input": true,
            "tableView": true
        },
        {
            "label": "Panel",
            "title": "Resultado",
            "collapsible": false,
            "mask": false,
            "tableView": false,
            "alwaysEnabled": false,
            "type": "panel",
            "input": false,
            "key": "panel2",
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "components": [
                {
                    "label": "Seleccionar ",
                    "mask": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "select",
                    "input": true,
                    "key": "select",
                    "defaultValue": "",
                    "validate": {
                        "select": false,
                        "customMessage": "",
                        "json": ""
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "data": {
                        "values": [
                            {
                                "label": "En seguimiento ",
                                "value": "en_seguimiento"
                            },
                            {
                                "label": "Sin repuesta ",
                                "value": "sin_repuesta"
                            },
                            {
                                "label": "Para entrega",
                                "value": "agendamiento_propio"
                            },
                            {
                                "label": "Sin interés",
                                "value": "sin_interes"
                            },
                            {
                                "label": "Datos erróneos",
                                "value": "datos_erroneos"
                            }
                        ]
                    },
                    "valueProperty": "value",
                    "selectThreshold": 0.3,
                    "encrypted": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "reorder": false,
                    "lazyLoad": false,
                    "selectValues": "",
                    "disableLimit": false,
                    "sort": "",
                    "reference": false
                },
                {
                    "label": "Comentarios",
                    "autoExpand": false,
                    "isUploadEnabled": false,
                    "showWordCount": false,
                    "showCharCount": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "textarea",
                    "input": true,
                    "key": "comentarios",
                    "defaultValue": "",
                    "validate": {
                        "customMessage": "",
                        "json": ""
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "inputFormat": "plain",
                    "encrypted": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "uploadUrl": "",
                    "uploadOptions": "",
                    "uploadDir": "",
                    "reorder": false
                }
            ],
            "properties": {},
            "customConditional": "",
            "logic": [],
            "attributes": {},
            "collapsed": false,
            "reorder": false
        }
    ],
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    }
}
const tipificacionEntrega={
    "display": "form",
    "components": [
        {
            "label": "Panel",
            "title": "Resultado de entrega",
            "collapsible": false,
            "mask": false,
            "tableView": false,
            "alwaysEnabled": false,
            "type": "panel",
            "input": false,
            "key": "panel2",
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "components": [
                {
                    "label": "Seleccione",
                    "mask": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "select",
                    "input": true,
                    "key": "select",
                    "defaultValue": "",
                    "validate": {
                        "customMessage": "",
                        "json": "",
                        "select": false
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "data": {
                        "values": [
                            {
                                "label": "Actualizar contrato ",
                                "value": "actualizarContrato"
                            },
                            {
                                "label": "Vista previa contrato ",
                                "value": "vistaPreviaContrato"
                            },
                            {
                                "label": "Finalizar entrega",
                                "value": "finalizarEntrega"
                            }
                        ]
                    },
                    "valueProperty": "value",
                    "selectThreshold": 0.3,
                    "encrypted": false,
                    "customConditional": "",
                    "properties": {},
                    "logic": [],
                    "attributes": {},
                    "reorder": false,
                    "lazyLoad": false,
                    "selectValues": "",
                    "disableLimit": false,
                    "sort": "",
                    "reference": false
                },
                {
                    "label": "Columns",
                    "columns": [
                        {
                            "components": [
                                {
                                    "label": "Field Set",
                                    "legend": "Garantía",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "fieldset",
                                    "input": false,
                                    "key": "fieldSet2",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "components": [
                                        {
                                            "label": "Tipo",
                                            "optionsLabelPosition": "right",
                                            "values": [
                                                {
                                                    "label": "OC",
                                                    "value": "oc",
                                                    "shortcut": ""
                                                },
                                                {
                                                    "label": "Cheque",
                                                    "value": "cheque",
                                                    "shortcut": ""
                                                },
                                                {
                                                    "label": "Tarjeta",
                                                    "value": "tarjeta",
                                                    "shortcut": ""
                                                }
                                            ],
                                            "inline": false,
                                            "mask": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "radio",
                                            "input": true,
                                            "key": "compra",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "reorder": false
                                        }
                                    ],
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "reorder": false
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "input": false,
                            "hideOnChildrenHidden": false,
                            "key": "column",
                            "tableView": true,
                            "label": "Column"
                        },
                        {
                            "components": [
                                {
                                    "label": "Field Set",
                                    "legend": "Pago",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "fieldset",
                                    "input": false,
                                    "key": "fieldSet",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "components": [
                                        {
                                            "label": "Forma",
                                            "optionsLabelPosition": "right",
                                            "values": [
                                                {
                                                    "label": "Efectivo",
                                                    "value": "efectivo",
                                                    "shortcut": ""
                                                },
                                                {
                                                    "label": "Cheque",
                                                    "value": "cheque",
                                                    "shortcut": ""
                                                },
                                                {
                                                    "label": "Tarjeta",
                                                    "value": "tarjeta",
                                                    "shortcut": ""
                                                }
                                            ],
                                            "inline": false,
                                            "mask": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "radio",
                                            "input": true,
                                            "key": "compra2",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "reorder": false
                                        }
                                    ],
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "reorder": false
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "input": false,
                            "hideOnChildrenHidden": false,
                            "key": "column",
                            "tableView": true,
                            "label": "Column"
                        }
                    ],
                    "mask": false,
                    "tableView": false,
                    "alwaysEnabled": false,
                    "type": "columns",
                    "input": false,
                    "key": "columns",
                    "conditional": {
                        "show": "true",
                        "when": "select",
                        "eq": "actualizarContrato",
                        "json": ""
                    },
                    "customConditional": "",
                    "properties": {},
                    "logic": [],
                    "attributes": {},
                    "reorder": false
                }
            ],
            "properties": {},
            "customConditional": "",
            "logic": [],
            "attributes": {},
            "collapsed": false,
            "reorder": false
        },
        {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "input": true,
            "tableView": true
        }
    ],
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    }
}
const tipificacionDevolucion={
    "display": "form",
    "components": [
        {
            "label": "Panel",
            "title": "Resultado devolución",
            "collapsible": false,
            "mask": false,
            "tableView": false,
            "alwaysEnabled": false,
            "type": "panel",
            "input": false,
            "key": "panel2",
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "components": [
                {
                    "label": "Seleccione",
                    "mask": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "select",
                    "input": true,
                    "key": "sellecccione2",
                    "defaultValue": "",
                    "validate": {
                        "customMessage": "",
                        "json": "",
                        "select": false
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "data": {
                        "values": [
                            {
                                "label": "Crear anexo contrato",
                                "value": "crearAnexoContrato"
                            },
                            {
                                "label": "Imprimir contrato",
                                "value": "imprimirContrato"
                            },
                            {
                                "label": "Finalizar Devolucion",
                                "value": "finGestion"
                            }
                        ]
                    },
                    "valueProperty": "value",
                    "selectThreshold": 0.3,
                    "encrypted": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "reorder": false,
                    "lazyLoad": false,
                    "selectValues": "",
                    "disableLimit": false,
                    "sort": "",
                    "reference": false
                },
                {
                    "label": "Columns",
                    "columns": [
                        {
                            "components": [
                                {
                                    "label": "Field Set",
                                    "legend": "Estado Entrega Del Vehículo",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "fieldset",
                                    "input": false,
                                    "key": "fieldSet",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "components": [
                                        {
                                            "label": "Kilómetros Entrega",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "kilometrosEntrega",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "widget": {
                                                "type": ""
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Combustible de Entrega",
                                            "mask": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "select",
                                            "input": true,
                                            "key": "combustibleDeEntrega",
                                            "defaultValue": "",
                                            "validate": {
                                                "select": false,
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "data": {
                                                "values": [
                                                    {
                                                        "label": "E",
                                                        "value": "e"
                                                    },
                                                    {
                                                        "label": "1/4",
                                                        "value": "14"
                                                    },
                                                    {
                                                        "label": "1/2",
                                                        "value": "12"
                                                    },
                                                    {
                                                        "label": "3/4",
                                                        "value": "34"
                                                    },
                                                    {
                                                        "label": "F",
                                                        "value": "f"
                                                    }
                                                ]
                                            },
                                            "valueProperty": "value",
                                            "selectThreshold": 0.3,
                                            "encrypted": false,
                                            "reorder": false,
                                            "lazyLoad": false,
                                            "selectValues": "",
                                            "disableLimit": false,
                                            "sort": "",
                                            "reference": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Monto Extensión",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "montoExtension",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "widget": {
                                                "type": ""
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Field Set",
                                            "legend": "Cobros Adicionales",
                                            "mask": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "fieldset",
                                            "input": false,
                                            "key": "fieldSet3",
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "components": [
                                                {
                                                    "label": "Tag",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "tag",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {}
                                                },
                                                {
                                                    "label": "Monto por bencina",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "monto",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "reorder": false
                                                },
                                                {
                                                    "label": "Monto adicional / Descuento por entrega",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "montoAdicional",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "reorder": false
                                                },
                                                {
                                                    "label": "Tabs",
                                                    "hideLabel": true,
                                                    "optionsLabelPosition": "right",
                                                    "values": [
                                                        {
                                                            "label": "Sólo del vehículo",
                                                            "value": "soloDelVehiculo",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Total con sus accesorios",
                                                            "value": "totalConSusAccesorios",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "inline": false,
                                                    "mask": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "radio",
                                                    "input": true,
                                                    "key": "radio",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "attributes": {},
                                                    "reorder": false
                                                }
                                            ],
                                            "reorder": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Fecha de entrega",
                                            "hideInputLabels": false,
                                            "inputsLabelPosition": "top",
                                            "fields": {
                                                "day": {
                                                    "hide": false,
                                                    "type": "number",
                                                    "required": true
                                                },
                                                "month": {
                                                    "hide": false,
                                                    "type": "select",
                                                    "required": true
                                                },
                                                "year": {
                                                    "hide": false,
                                                    "type": "number",
                                                    "required": true
                                                }
                                            },
                                            "useLocaleSettings": false,
                                            "mask": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "day",
                                            "input": true,
                                            "key": "fechaDeEntrega",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "encrypted": false,
                                            "properties": {},
                                            "maxDate": "",
                                            "minDate": "",
                                            "attributes": {
                                                "": "Value"
                                            },
                                            "logic": [],
                                            "customConditional": "",
                                            "reorder": false
                                        }
                                    ],
                                    "reorder": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {}
                                },
                                {
                                    "label": "Observaciones",
                                    "autoExpand": false,
                                    "isUploadEnabled": false,
                                    "showWordCount": false,
                                    "showCharCount": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "textarea",
                                    "input": true,
                                    "key": "observaciones2",
                                    "defaultValue": "",
                                    "validate": {
                                        "customMessage": "",
                                        "json": ""
                                    },
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "uploadUrl": "",
                                    "uploadOptions": "",
                                    "uploadDir": "",
                                    "reorder": false,
                                    "inputFormat": "plain",
                                    "encrypted": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {}
                                },
                                {
                                    "label": "Guardar",
                                    "state": "",
                                    "shortcut": "",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "button",
                                    "input": true,
                                    "key": "guardar",
                                    "defaultValue": false,
                                    "validate": {
                                        "customMessage": "",
                                        "json": ""
                                    },
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "showValidations": false,
                                    "event": "",
                                    "url": "",
                                    "custom": "",
                                    "reorder": false,
                                    "encrypted": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {}
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "input": false,
                            "hideOnChildrenHidden": false,
                            "key": "column",
                            "tableView": true,
                            "label": "Column"
                        },
                        {
                            "components": [
                                {
                                    "label": "Field Set",
                                    "legend": "Estado Devolución Vehículo",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "fieldset",
                                    "input": false,
                                    "key": "fieldSet2",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "components": [
                                        {
                                            "label": "Kilómetros de Devolución",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "kilometrosDeDevolucion",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "widget": {
                                                "type": ""
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Combustible de Entrega",
                                            "mask": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "select",
                                            "input": true,
                                            "key": "combustibleDeEntrega2",
                                            "defaultValue": "",
                                            "validate": {
                                                "select": false,
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "data": {
                                                "values": [
                                                    {
                                                        "label": "E",
                                                        "value": "e"
                                                    },
                                                    {
                                                        "label": "1/4",
                                                        "value": "14"
                                                    },
                                                    {
                                                        "label": "1/2",
                                                        "value": "12"
                                                    },
                                                    {
                                                        "label": "3/4",
                                                        "value": "34"
                                                    },
                                                    {
                                                        "label": "F",
                                                        "value": "f"
                                                    }
                                                ]
                                            },
                                            "valueProperty": "value",
                                            "selectThreshold": 0.3,
                                            "encrypted": false,
                                            "reorder": false,
                                            "lazyLoad": false,
                                            "selectValues": "",
                                            "disableLimit": false,
                                            "sort": "",
                                            "reference": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Estado del vehículo",
                                            "mask": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "select",
                                            "input": true,
                                            "key": "estadoDelVehiculo",
                                            "defaultValue": "",
                                            "validate": {
                                                "select": false,
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "data": {
                                                "values": [
                                                    {
                                                        "label": "Operativo",
                                                        "value": "operativo"
                                                    },
                                                    {
                                                        "label": "Con daño",
                                                        "value": "conDano"
                                                    }
                                                ]
                                            },
                                            "valueProperty": "value",
                                            "selectThreshold": 0.3,
                                            "encrypted": false,
                                            "reorder": false,
                                            "lazyLoad": false,
                                            "selectValues": "",
                                            "disableLimit": false,
                                            "sort": "",
                                            "reference": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        }
                                    ],
                                    "reorder": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {}
                                },
                                {
                                    "label": "Field Set",
                                    "legend": "Facturar a:",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "fieldset",
                                    "input": false,
                                    "key": "fieldSet4",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "components": [
                                        {
                                            "label": "Rut/Pasaporte",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "rutPasaporte",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "widget": {
                                                "type": ""
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Nombre",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "nombre",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "widget": {
                                                "type": ""
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Giro",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "giro",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "widget": {
                                                "type": ""
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Dirección",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "direccion",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "widget": {
                                                "type": ""
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Ciudad",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "ciudad",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "widget": {
                                                "type": ""
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Comuna",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "comuna",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "widget": {
                                                "type": ""
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Teléfono",
                                            "mask": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "number",
                                            "input": true,
                                            "key": "telefono",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "reorder": false,
                                            "delimiter": false,
                                            "requireDecimal": false,
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        },
                                        {
                                            "label": "Email",
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "email",
                                            "input": true,
                                            "key": "email",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "reorder": false,
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        }
                                    ],
                                    "reorder": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {}
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "input": false,
                            "hideOnChildrenHidden": false,
                            "key": "column",
                            "tableView": true,
                            "label": "Column"
                        }
                    ],
                    "mask": false,
                    "tableView": false,
                    "alwaysEnabled": false,
                    "type": "columns",
                    "input": false,
                    "key": "columns",
                    "conditional": {
                        "show": "true",
                        "when": "sellecccione2",
                        "eq": "crearAnexoContrato",
                        "json": ""
                    },
                    "customConditional": "",
                    "reorder": false,
                    "properties": {},
                    "logic": [],
                    "attributes": {}
                }
            ],
            "properties": {},
            "customConditional": "",
            "logic": [],
            "attributes": {},
            "collapsed": false,
            "reorder": false
        }
    ],
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    }
}