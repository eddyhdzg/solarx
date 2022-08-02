import en from "./en.json";

type EN = typeof en;

export const es: EN = {
  translation: {
    auth: {
      myAccount: "Mi Cuenta",
      signInWithGoogle: "Inicia sesión con Google",
      signIntoUseThisRoute: "Inicia sesión para usar esta ruta.",
      signOut: "Cerrar sesión",
      youNeedToBeAnAdmin: "Necesitas ser administrador para usar esta ruta.",
    },
    common: {
      avatar: "Avatar",
      cancel: "Cancelar",
      email: "Email",
      id: "id",
      ID: "ID",
      investor: "Inversionista",
      investors: "Inversionistas",
      "investor-plural_one": "Inversionista",
      "investor-plural_other": "Inversionistas",
      investorWithCount_one: "{{count}} Inversionista",
      investorWithCount_other: "{{count}} Inversionistas",
      noInvestorsFound: "¡No se encontraron inversionistas!",
      ok: "OK",
      panel: "Panel",
      panels: "Páneles",
      "panel-plural_one": "Panel",
      "panel-plural_other": "Páneles",
      profile: "Perfil",
      uid: "uid",
    },
    dates: {
      year: "Año",
      years: "Años",
      "year-plural_one": "Año",
      "year-plural_other": "Años",
    },
    filters: {
      results: "Resultados",
      selected: "Seleccionados:",
      basePriceRange: "Rango de precio base",
    },
    forms: {
      cards: "Tarjetas",
      clear: "Limpear",
      copiedToClipboard: "Copiado al portapapeles ✅",
      copyToClipboard: "Copiar al portapapeles",
      dragNDropfile:
        "Arrastre y suelte un archivo aquí, o haga clic para seleccionar un archivo",
      dragNDropfiles:
        "Arrastre y suelte multiples archivos aquí, o haga clic para seleccionar archivos",
      filters: "Filtros",
      founded: "Fundada",
      notFounded: "No Fundada",
      projectForm: {
        aboutContent: "Contentenido acerca de",
        content: "Contenido",
        contentDescription: "Contenido para enseñar el projecto.",
        coverImage: "Imagen de portada desde stripe.",
        current: "Actual",
        datesDescription: "Proporcione las fechas importantes del projecto.",
        generalContent: "Contentenido general",
        generalDescription: "Proporcione información básica sobre el proyecto.",
        generalOption: "General Option",
        generalOptionDescription:
          "Volver a calcular la cantidad de la opcion generales con respecto a las nuevas opciones de compra",
        generatePanels: "Generar páneles",
        generatePanelsDescription:
          "Genera los páneles cuando el proyecto esté listo.",
        goalDescription: "Recalcula la meta.",
        graphsContent: "Contentenido gráfico",
        mediaDescription: "Imágenes para mostrar el proyecto.",
        new: "Nuevo",
        notionLink: "https://www.notion.so/solarxapp/",
        numbersDescription: "Todos los datos numéricos del proyecto.",
        panelPrice: "Precio del panel",
        panelPriceDescription:
          "Actualizar el precio del panel en todos los precios si no están sincronizados",
        pricesDescription:
          "Precios para los primeros inversores o para el público en general.",
        triggersDescription:
          "Funciones que el usuario puede ejecutar para actualizar los datos del proyecto.",
        updateGeneralOption: "Actualizar opción general",
        updateGoal: "Actualizar meta",
        updatePanelPrices: "Actualizar precios",
      },
      reset: "Resetear",
      search: "Buscar",
      share: "Compartir",
      table: "Tabla",
    },
    locales: {
      english: "English",
      spanish: "Español",
    },
    pages: {
      admin: {
        adminHome: {
          title: "Admin",
          description: "Sección de administración.",
        },
        editProject: {
          editProject: "Editar proyecto",
          title: "Editar proyecto",
          description: "Edita un proyecto de crowdfunding.",
        },
        investors: {
          title: "Inversionistas",
          description: "Gestionar inversionistas como administrador.",
          role: "Rol",
        },
        local: {
          title: "Local",
          description: "Gestionar base de datos local como administrador.",
          create3Prices: "Crear 3 precios para un producto",
          createPrices: "Crear Precios",
          createProduct: "Crear Producto",
          createProducts: "Crear Productos",
        },
        projects: {
          title: "Proyectos de administrador",
          description: "Proyectos que solo los administradores pueden ver.",
        },
      },
      crowdfunding: {
        checkout: {
          addNewPaymentMethod: "Agrega nuevo método de pago",
          addPaymentMethod: "Agregar método de pago",
          cardDetails: "Detalles de tarjeta",
          each: "cada una",
          forThisDemo: "para este demo!",
          nameOnCard: "Nombre en la tarjeta",
          pay: "Pagar",
          poweredBy: "Desarrollado por",
          privacy: "Privacidad",
          qty: "Cant",
          selectPaymentMethod: "Selecciona método de pago",
          stripeTestCards: " tarjetas de prueba de Stripe ",
          terms: "Términos",
          update: "Actualizar",
          updateQuantity: "Actualizar cantidad",
          useAnyOfThe: "¡Usa cualquiera de las",
        },
        project: {
          about: "Acerca de",
          allGone: "Agotadas",
          crowdfund: "Crowdfund",
          goToCheckout: "Ir a pago",
          graphs: "Gráficas",
          limited: "Limitada (quedan {{rest}} de {{quantity}})",
          monthlyRevenue: "Ingreso mensual",
          notLimited: "Quedan {{rest}} de {{quantity}}",
          price: "Precio",
          raisedOf: "levantado de",
          "releaseDate:": "Fecha de lanzamiento:",
          showAllPhotos: "Ver más fotos",
          signInToProceedToPayment: "Inicie sesión para proceder al pago",
          yearlyRevenue: "Ingreso anual",
        },
        projects: {
          title: "Crowdfunding",
          description: "Todos los proyectos de crowdfunding.",
        },
      },
      more: {
        preferences: {
          title: "Preferencias",
          description: "Preferencias del inversor.",
          interfaceLanguage: "Idioma de la interfaz",
          language: "Idioma",
          preferences: "Preferencias",
        },
        profile: {
          title: "Perfil",
          description: "Mi perfil.",
          accountID: "ID de cuenta",
          displayName: "Nombre para mostrar",
          editAccount: "Editar cuenta",
          privateInformation: "Información privada",
          publicInformation: "Información pública",
          publicInformationDescription:
            "Esta información se mostrará públicamente.",
        },
        moreHome: {
          title: "Más",
          description: "Más sección.",
        },
        history: {
          title: "Historial",
          description: "Historial del inversionista.",
        },
        receipt: {
          title: "Recivo",
          description: "Recivo.",
          contactEmail: "eddy@solarx.app",
          date: "FECHA",
          each: "cada una",
          paymentMethod: "MÉTODO DE PAGO",
          "questions?": "¿Preguntas?",
          sharableReceipt: "URL de recibo compartible",
          summary: "RESUMEN",
        },
      },
      wallet: {
        title: "Wallet",
        description: "Sección de la wallet.",
        balances: {
          balances: "Balances",
        },
        sections: {
          balance: "Balance",
          history: "Historial",
          timeline: "Línea del tiempo",
          totalBalance: "Balance Total",
        },
        timeline: {
          "1 month": "1 mes",
          "3 month": "3 meses",
          "1 year": "1 año",
          cash: "Cash",
          historic: "Histórico",
          solarXPoints: "SolarX Points",
          panels: "Panels",
          totalBalance: "Total Balance",
        },
      },
    },
    projects: {
      active: "Activo",
      basePrice: "Precio base",
      businessType: "Tipo de empresa",
      city: "Ciudad",
      cms: "CMS",
      company: "Empresa",
      created: "Creado",
      dates: "Fechas",
      description: "Descripción",
      discount: "Descuento",
      discountWithCount: "Descuento {{discount}}%",
      funded: "Financiado",
      fundedWithCount: "{{count}}% Financiado",
      general: "General",
      goal: "Meta",
      images: "Imágenes",
      local: "Local",
      location: "Ubicación",
      media: "Media",
      name: "Nombre",
      notActive: "Not activo",
      notFunded: "No financiado",
      numbers: "Números",
      operationDate: "Fecha de la operación",
      "panels(funded/total)": "Páneles (financiados/total)",
      panelsWithRatio: "{{funded}} / {{total}} páneles",
      ppa: "PPA",
      ppaYears: "Años de PPA",
      prices: "Precios",
      progress: "Progreso",
      project: "Projecto",
      projectName: "Nombre del proyecto",
      projects: "Projectos",
      quantity: "Cantidad",
      releaseDate: "Fecha de lanzamiento",
      "roi(ReturnOnInvestment)": "TIR (Tasa Interna de Retorno)",
      roi: "TIR",
      salePrice: "Precio de Venta",
      sold: "Vendidos",
      state: "Estado",
      status: "Status",
      statuses: {
        comingSoon: "Próximamente",
        funding: "Financiando",
        funded: "Financiado",
        operating: "Operando",
        canceled: "Cancelado",
      },
      summary: "Resumen",
      total: "Total",
      totalPanels: "Total de acciones",
      triggers: "Triggers",
    },
    router: {
      admin: "Admin",
      crowdfunding: "Crowdfunding",
      history: "Historial",
      more: "Más",
      project: "Proyecto",
      projects: "Proyectos",
      wallet: "Wallet",
    },
    snackbar: {
      errorPayment: "Error de pago. Vuelve a intentarlo más tarde. 😔",
      investorEdited: "Inversionista editado! 🔥",
      investorNotEdited: "Error al editar al inversionista. 😔",
      panelsCreated: "Páneles creadas! 🔥",
      panelsNotCreated: "Error al crear páneles. 😔",
      panelsPricesNotUpdated: "Error al editar precio de los páneles. 😔",
      panelsPricesUpdated: "Precio de los páneles editados! 🔥",
      paymentMethodCreated: "Método de pago creado. 👍🏻",
      paymentMethodCreatedError: "Error al crear el método de pago. 😔",
      priceEdited: "Precio editado! 🔥",
      priceNotEdited: "Error al editar el precio. 😔",
      projectCreated: "Projecto Creado! 🔥",
      projectEdited: "Proyecto editado! 🔥",
      projectGoalEdited: "Meta del proyecto editada! 🔥",
      projectGoalNotEdited: "Error al editar meta del proyecto. 😔",
      projectNotCreated: "Error al crear projecto. 😔",
      projectNotEdited: "Error al editar proyecto. 😔",
      roleEdited: "Rol editado! 🔥",
      roleNotEdited: "Error al editar rol. 😔",
    },
    table: {
      actions: "Acciones",
      displayedRows: "{{from}}-{{to}} de {{count}}",
      rowsPerPage: "Filas por página:",
    },
  },
};
