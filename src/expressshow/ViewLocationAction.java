//Created by MyEclipse Struts
// XSL source (default): platform:/plugin/com.genuitec.eclipse.cross.easystruts.eclipse_3.8.4/xslt/JavaClass.xsl

package expressshow;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

/** 
 * MyEclipse Struts
 * Creation date: 11-30-2006
 * 
 * XDoclet definition:
 * @struts:action validate="true"
 * @struts:action-forward name="success" path="/viewlocationdetails.jsp"
 * @struts:action-forward name="fail" path="/edittripdetails.jsp"
 */
public class ViewLocationAction extends Action {

	// --------------------------------------------------------- Instance Variables

	// --------------------------------------------------------- Methods

	/** 
	 * Method execute
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return ActionForward
	 */
	public ActionForward execute(
		ActionMapping mapping,
		ActionForm form,
		HttpServletRequest request,
		HttpServletResponse response) throws Exception {
		System.out.println("in location");
		ArrayList obj3=Validation.getLocations(getDataSource(request));
		if(obj3!=null)
		{
			
			HttpSession hs=request.getSession(false);
			hs.setAttribute("obj3",obj3);
			System.out.println("obj3 added");
			return mapping.findForward("success");
		}
		return mapping.findForward("fail");
	}

}