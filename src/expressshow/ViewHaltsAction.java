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
 * Creation date: 11-28-2006
 * 
 * XDoclet definition:
 * @struts:action validate="true"
 * @struts:action-forward name="success" path="/viewtriphalts.jsp"
 * @struts:action-forward name="fail" path="/viewtripdetails.jsp"
 */
public class ViewHaltsAction extends Action {

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
		HttpServletResponse response)throws Exception {

		String trid=request.getParameter("trid");
		System.out.println(trid);
		ArrayList obj1=Validation.viewTripHalts(trid,getDataSource(request));
		System.out.println("Returned from view triphalts");
		if(obj1!=null)
		{
			System.out.println("not null obj1");
			HttpSession hs=request.getSession(false);
			hs.setAttribute("obj1",obj1);
			return mapping.findForward("success");
		}
		return mapping.findForward("fail");
	}

}