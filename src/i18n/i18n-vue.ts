export const messages = {
  fr: {
    general: {
      a11y_legal_obligations_france: `Obligations légales pour l'accessibilité des contenus et services numériques en France`,
      form_collect_no_data: `Ce formulaire ne collecte aucune donnée.`,
      form_mandatory_fields_legend: `Une réponse est requise pour chaque question.`,
      what_entity_are_you: `Quel type d'entité représentez-vous ?`,
      public_entity: `Un organisme public (ou assimilé)`,
      private_entity: `Une entreprise privée`,
      what_is_your_turnover: `Quel est votre chiffre d'affaires ?`,
      over_250m: `Supérieur à 250 millions d'euros`,
      over_2m: `Supérieur à 2 millions d'euros`,
      below_2m: `Inférieur à 2 millions d'euros`,
      how_many_employees: `Quel est votre nombre de salariés ?`,
      over_10: `10 ou plus`,
      below_10: `Moins de 10`,
      do_you_provide_service: `Fournissez-vous un service ?`,
      yes: `Oui`,
      no: `Non`,
      service_yes: `Oui, je fournis un service concerné par la directive européene relative à l'accessibilité des produits et services.`,
      service_no: `Non, je ne fournis pas l'un de ces services.`,
      previous: `Précédent`,
      next: `Suivant`,
      reset: `Réinitialiser`,
      validate: `Valider`,
      summary: `Résumé`,
      all_digital_content_including: `Tout contenu numérique, y compris`,
      following_digital_services: `Les services numériques suivants`,
      your_legal_obligations: `Vos obligations légales`,
      application_field: `Champ d'application | Champs d'applications`,
      obligation: `Obligation | Obligations`,
      sanction: `Santion | Les sanctions`,
      control_organism: `Organisme de contrôle | Organismes de contrôle`,
      reference_text: `Texte de référence | Textes de référence`,
      no_explicit_obligation: `Pas d'obligation explicite`,
      financial_penalties: `Sanction financière | Sanctions financières`,
      legal_penalties: `Sanction juridique | Sanctions juridiques`,
      what_is_a_service: `Qu'est ce qu'un service ?`,
      type_of_service_concerned: `Type de service concerné | Type de services concernés`,
      a_service_is: `Les services concernés sont :`,
      result_title_subtext: `Ce que vous devez faire.`,
      application_field_subtext: `Qu'est-ce qui est concerné ?`,
      obligation_subtext: `Ce que la loi demande.`,
      sanction_subtext: `Si vous ne respectez pas ces règles.`,
      control_organism_subtext: `Qui contrôle ?`
    },
    error: {
      empty_entity: `Veuillez renseigner un type d'entité.`,
      empty_turnover: `Veuillez renseigner votre chiffre d'affaire.`,
      empty_employees: `Veuillez renseigner votre nombre de salariés.`,
      empty_service: `Veuillez renseigner si vous fournissez un service.`
    },
    summary: {
      public: `Vous êtes un organisme publique (ou assimilé).`,
      private: `Vous êtes une entreprise privée.`,
      over250m: `Votre chiffre d'affaire est supérieur à 250 millions d'euros`,
      over2m: `Votre chiffre d'affaire est supérieur à 2 millions d'euros`,
      below2m: `Votre chiffre d'affaire est inférieur à 2 millions d'euros`,
      provide_service: `Vote entreprise fournit un service`,
      no_service: `Votre chiffre d'affaire est inférieur à 2 millions d'euros`,
      over_employee_limit: `Votre entreprise compte plus de {count} employés ou employées.`,
      below_employee_limit: `Votre entreprise compte moins de {count} employés ou employées.`
    },
    html: {
      no_legal_obligation_content: `<p>Aucune obligation légale.</p>
        <p>L'accessibilité est toutefois une nécessité et un droit fondamental pour les personnes en situation de handicap.</p>
        <p>Un contenu ou un service non-accessible représente une source de discrimination, qui est punie par la loi.</p>
        <p>N'hésitez pas à vous renseigner sur le sujet !</p>`,
      service_source_content: `Pour aller plus loin : <a href="https://eur-lex.europa.eu/eli/dir/2019/882/oj?locale=fr#002.002">Directive europééne 2019/882, chapitre 1, article 2 - Services concernés</a>.`
    },
    law: {
      france: {
        '2023_171': `Loi n° 2023-171 du 9 mars 2023 portant diverses dispositions d'adaptation au droit de l'Union européenne dans les domaines de l'économie, de la santé, du travail, des transports et de l'agriculture`,
        '2005_102': `Loi n° 2005-102 du 11 février 2005 pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées`
      },
      europe: {
        '2016_2102': `Directive 2016/2102 relative à l'accessibilité des sites internet et des applications mobiles du secteur public`,
        '2019_882': `Directive 2019/882 relative aux exigences en matière d'accessibilité applicables aux produits et services`
      }
    },
    service: {
      audiovisual: `Service fournissant un accès à des services de médias audiovisuels | Services fournissants un accès à des services de médias audiovisuels`,
      digital_communication: `Service de communication électronique | Services de communication électronique`,
      transport: `Service de transport | Services de transports`,
      bank: `Service banquaire | Services banquaires`,
      digital_book: `Livre numérique | Livres numériques`,
      ecommerce: `Commerce électronique (e-commerce)`,
      website: `Site web | Sites web`,
      mobile_app: `Application mobile | Applications mobile`,
      internet: `Internet`,
      intranet: `Intranet`,
      software_package: `Progiciel | Progiciels`,
      digital_urban_furniture: `Mobilier urbain numérique | Mobiliers urbain numérique`
    },
    obligation: {
      rgaa_compliance: `Conformité au @:standard.rgaa (@:standard.rgaa_long)`,
      declaration_schema_plan_publication: `Publication d'une déclaration de conformité, d'un schéma pluriannuel et d'un plan d'action`,
      compliance_display: `Affichage du niveau d'accessibilité (non-conforme / partiellement conforme / totalement conforme) sur la page d'accueil`,
      general_compliance: `Conformité au RGAA ou à la norme EN 301 549 ou à WCAG 2.1.`,
      en_301_549_compliance: `Conformité à la norme EN 301 549`,
      user_accessibility_information: `Information des consommateurs sur la manière dont le service se conforme aux exigences d'accessibilité`,
      maintaining_compliance_procedures: `Mise en place de procédures pour que la conformité soit maintenue`,
      informing_authorities_of_noncompliance: `Information des autorités de contrôle en cas de non-conformité`,
      providing_compliance_proof_ability: `Capacité à fournir une preuve de la conformité sur demande des autorités de contrôle`
    },
    control_organization: {
      arcom: `ARCOM`,
      arcom_long: `Autorité de Régulation de la Communication audiovisuelle et numérique`,
      dgccrf: `DGCCRF`,
      dgccrf_long: `Direction Générale de la Concurrence, de la Consommation et de la Répression des Fraudes`,
      arcep: `ARCEP`,
      arcep_long: `Autorité de Régulation des Communications Électroniques et des Postes`,
      amf: `AMF`,
      amf_long: `Autorité des Marchés Financiers`,
      bdf: `La Banque de France`
    },
    sanction: {
      public_notice: `Mise en demeure publique`,
      acrom_publication: `Les sanctions peuvent être rendues publiques par l'ARCOM`,
      six_month_renewable: `Sanctions renouvelables après 6 mois`,
      no_compliance_fine: `Jusqu'à 50 000 € pour non conformité`,
      no_declaration_fine: `Jusqu'à 25 000 € pour non publication de la déclaration de conformité et des autres documents requis.`,
      injunction_daily_fine: `Injonction avec astreinte journalière de 3 000 €, pouvant aller jusqu'à 30 000 € au total (sans dépasser 5 % du chiffre d'affaires)`,
      five_class_fine: `Contravention de 5e classe (7 500 € pour une personne morale)`,
      fine_in_europe_depends: `Chaque pays de l'UE définit ses propres sanctions`
    },
    standard: {
      rgaa: `RGAA`,
      rgaa_long: `Référentiel Général d'Amélioration de l'Accessibilité`,
      raweb: `RAWeb`,
      raweb_long: `Référentiel d'Évaluation de l'Accessibilité Web`
    }
  },
  en: {
    general: {
      a11y_legal_obligations_france: `Legal obligations for the accessibility of digital content and services in France`
    }
  }
}
