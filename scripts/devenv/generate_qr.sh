#!/bin/bash

# Directorios (relativos a la raíz del repo, sin importar desde dónde se corra)
REPO="$(cd "$(dirname "$(readlink -f "$0")")/../.." && pwd)"
ACTIVITIES_DIR="$REPO/content/activities"
QR_DIR="$REPO/imagenes/actividades/qr"

# Crear directorio de destino si no existe
mkdir -p "$QR_DIR"

# URL base
BASE_URL="${BASE_URL:-https://mok726.github.io/fogata-recursos}/activities"

# Servicio QR
QR_API="https://api.qrserver.com/v1/create-qr-code"

# Función para generar QR
generate_qr() {
    local file="$1"
    local filename=$(basename "$file" .md)
    local qr_path="$QR_DIR/$filename.png"
    
    # Verificar si ya existe el QR
    if [ -f "$qr_path" ]; then
        echo "⏭️  $filename.png ya existe, saltando..."
        return 0
    fi
    
    # URL completa
    local full_url="$BASE_URL/$filename"
    
    # URL codificada para el QR
    local encoded_url=$(printf '%s' "$full_url" | jq -sRr @uri)
    
    echo "📱 Generando QR para: $filename"
    echo "   URL: $full_url"
    
    # Descargar QR siguiendo redirecciones y guardando el resultado
    # -L: sigue redirecciones
    # -o: output file
    # --max-redirs: máximo de redirecciones a seguir
    curl -L --max-redirs 5 -s -o "$qr_path" "$QR_API?size=300x300&data=$encoded_url"
    
    # Verificar que se descargó correctamente y es una imagen PNG
    if [ $? -eq 0 ] && [ -f "$qr_path" ] && [ -s "$qr_path" ] && file "$qr_path" | grep -q "PNG image"; then
        echo "✅ QR guardado en: $qr_path"
    else
        echo "❌ Error generando QR para: $filename"
        # Mostrar el contenido para debug si es necesario
        # cat "$qr_path" 2>/dev/null
        rm -f "$qr_path"
    fi
    
    # Pequeña pausa para no sobrecargar el servicio
    sleep 1
}

# Verificar que existe el directorio de actividades
if [ ! -d "$ACTIVITIES_DIR" ]; then
    echo "❌ Error: No se encuentra el directorio $ACTIVITIES_DIR"
    exit 1
fi

# Verificar que jq está instalado (para codificar URLs)
if ! command -v jq &> /dev/null; then
    echo "⚠️  jq no está instalado. Usando método alternativo para codificar URLs..."
    
    # Función alternativa sin jq
    generate_qr_alt() {
        local file="$1"
        local filename=$(basename "$file" .md)
        local qr_path="$QR_DIR/$filename.png"
        
        if [ -f "$qr_path" ]; then
            echo "⏭️  $filename.png ya existe, saltando..."
            return 0
        fi
        
        local full_url="$BASE_URL/$filename"
        # Codificación URL simple (reemplaza espacios y caracteres especiales básicos)
        local encoded_url=$(echo "$full_url" | sed 's/ /%20/g' | sed 's/&/%26/g' | sed 's/?/%3F/g' | sed 's/#/%23/g')
        
        echo "📱 Generando QR para: $filename"
        curl -L --max-redirs 5 -s -o "$qr_path" "$QR_API?size=300x300&data=$encoded_url"
        
        if [ $? -eq 0 ] && [ -f "$qr_path" ] && [ -s "$qr_path" ] && file "$qr_path" | grep -q "PNG image"; then
            echo "✅ QR guardado en: $qr_path"
        else
            echo "❌ Error generando QR para: $filename"
            rm -f "$qr_path"
        fi
        sleep 1
    }
    
    # Usar función alternativa
    for file in "$ACTIVITIES_DIR"/*.md; do
        if [ -f "$file" ]; then
            generate_qr_alt "$file"
#	exit 0
        fi
    done
else
    # Usar función principal con jq
    for file in "$ACTIVITIES_DIR"/*.md; do
        if [ -f "$file" ]; then
            generate_qr "$file"
#	    exit 0
        fi
    done
fi

echo ""
echo "✨ ¡Proceso completado!"
echo "📁 Los QR están en: $QR_DIR"
