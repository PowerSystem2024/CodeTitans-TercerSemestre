# Importa el módulo logging y lo renombra como log para escribir menos.
import logging as log

# Llamamos una configuracion basica
# gracias a esta configuracion se mostraran los mensajes
# Establece el nivel mínimo de mensajes que se van a registrar. DEBUG es el más bajo, por lo que mostrará
# todos los niveles (DEBUG, INFO, WARNING, ERROR, CRITICAL).
# Define el formato del mensaje. Por ejemplo, un mensaje puede verse así:
# 19:02:59:DEBUG [Persona.py:12] Mensaje a nivel debug)]

# %(asctime)s → hora del mensaje
#
# %(levelname)s → nivel del log (DEBUG, INFO, etc.)
#
# %(filename)s → archivo de origen
#
# %(lineno)d → línea del archivo
#
# %(message)s → el mensaje en sí
log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)d] %(message)s)]',
                datefmt='%H:%M:%S',
                handlers=[
                    log.FileHandler('capa_datos.log'),
                    log.StreamHandler()
                ])
log.debug('Mensaje a nivel debug')
log.info('Mensaje a nivel info')
log.warning('Mensaje a nivel warning')
log.error('Mensaje a nivel error')
log.critical('Mensaje a nivel critical')


