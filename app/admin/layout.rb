module Milestone
  module ActiveAdmin::Views::Pages::BaseExtension
    def build_active_admin_head
      super
      within super do
        text_node(javascript_pack_tag('application.js'))
      end
    end
  end
end

class ActiveAdmin::Views::Pages::Base < Arbre::HTML::Document
  prepend Milestone::ActiveAdmin::Views::Pages::BaseExtension
end
